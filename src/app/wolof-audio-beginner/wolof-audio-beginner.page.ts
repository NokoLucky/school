import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { IonRange, LoadingController, AlertController } from '@ionic/angular';
import { Howl } from 'howler';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase.config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Track {
  name: string;
  path: string;
  proxyPath: string;
  loading?: boolean;
  pdfUrl?: string;
  pdfName?: string;
  hasDocument?: boolean;
  isDocumentOnly?: boolean; // New flag for documents without audio
}

@Component({
  selector: 'app-wolof-audio-beginner',
  templateUrl: './wolof-audio-beginner.page.html',
  styleUrls: ['./wolof-audio-beginner.page.css'],
})
export class WolofAudioBeginnerPage implements OnInit {

  playlist: Track[] = [];
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  isLoading: boolean = true;
  error: string = '';
  currentPdfName: string = '';
  showPdfViewer: boolean = false;
  isPdfLoading: boolean = false;
  currentPdfUrl: SafeResourceUrl = null;
  autoScrollEnabled: boolean = true;
  private scrollInterval: any = null;

  @ViewChild('range', { static: false }) range: IonRange;
  @ViewChild('pdfViewer', { static: false }) pdfViewer: ElementRef;
  @ViewChild('pdfIframe', { static: false }) pdfIframe: ElementRef;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private ngZone: NgZone,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loadAudioAndReadingLessons();
  }

  async loadAudioAndReadingLessons() {
    this.isLoading = true;
    this.error = '';

    let loading: HTMLIonLoadingElement = null;
    const loaderTimer = setTimeout(async () => {
      loading = await this.loadingCtrl.create({
        message: 'Loading lessons...',
        spinner: 'crescent',
      });
      await loading.present();
    }, 500);

    try {
      const audioRef = ref(db, '/Wolof/Beginner/Audio Lessons');
      const readingRef = ref(db, 'Wolof/Beginner/Reading Lessons');

      console.log('Loading audio and reading lessons...');

      // Load both audio and reading lessons
      onValue(
        audioRef,
        (audioSnapshot) => {
          onValue(
            readingRef,
            (readingSnapshot) => {
              clearTimeout(loaderTimer);
              if (loading) loading.dismiss();

              this.ngZone.run(() => {
                this.processLessonsData(audioSnapshot, readingSnapshot);
              });
            },
            (error) => {
              this.handleDataError(error, loaderTimer, loading);
            }
          );
        },
        (error) => {
          this.handleDataError(error, loaderTimer, loading);
        }
      );
    } catch (error) {
      this.handleDataError(error, loaderTimer, loading);
    }
  }

  private processLessonsData(audioSnapshot: any, readingSnapshot: any) {
    const combinedPlaylist: Track[] = [];
    
    // Store reading data for download functionality
    if (readingSnapshot.exists()) {
      const readingData = readingSnapshot.val();
      localStorage.setItem('readingData', JSON.stringify(readingData));
      console.log('Reading data:', readingData);

      // Process reading lessons (documents)
      Object.keys(readingData).forEach((key) => {
        const documentUrl = this.getDocumentViewUrl(readingData[key]);
        combinedPlaylist.push({
          name: key,
          path: null, // No audio path
          proxyPath: null, // No audio proxy path
          pdfUrl: documentUrl,
          pdfName: key,
          hasDocument: true,
          isDocumentOnly: true, // This is a document-only lesson
          loading: false
        });
      });
    }

    // Process audio lessons (only if they exist)
    if (audioSnapshot.exists()) {
      const audioData = audioSnapshot.val();
      console.log('Audio data:', audioData);

      Object.keys(audioData).forEach((key) => {
        const directUrl = this.convertToEmbedUrl(audioData[key]);
        const proxyUrl = this.getProxyUrl(directUrl);
        
        // Find matching document by name
        let pdfKey = null;
        let documentUrl = null;
        
        if (readingSnapshot.exists()) {
          const readingData = readingSnapshot.val();
          pdfKey = this.findMatchingPdfKey(key, readingData);
          documentUrl = pdfKey ? this.getDocumentViewUrl(readingData[pdfKey]) : null;
        }
        
        // Check if this audio already exists in combined playlist (as document-only)
        const existingDocIndex = combinedPlaylist.findIndex(item => 
          item.isDocumentOnly && this.normalizeName(item.name) === this.normalizeName(pdfKey || key)
        );

        if (existingDocIndex !== -1) {
          // Replace document-only entry with audio+document entry
          combinedPlaylist[existingDocIndex] = {
            name: pdfKey || key,
            path: directUrl,
            proxyPath: proxyUrl,
            pdfUrl: documentUrl,
            pdfName: pdfKey || key,
            hasDocument: !!pdfKey,
            isDocumentOnly: false,
            loading: false
          };
        } else {
          // Add new audio entry
          combinedPlaylist.push({
            name: pdfKey || key,
            path: directUrl,
            proxyPath: proxyUrl,
            pdfUrl: documentUrl,
            pdfName: pdfKey || key,
            hasDocument: !!pdfKey,
            isDocumentOnly: false,
            loading: false
          });
        }
      });
    }

    // Sort by extracted number
    this.playlist = combinedPlaylist.sort((a, b) => this.extractNumber(a.name) - this.extractNumber(b.name));
    
    console.log('Final combined playlist:', this.playlist);
    
    if (this.playlist.length === 0) {
      console.log('No lessons found');
      this.error = 'No lessons available.';
    }
    
    this.isLoading = false;
  }

  private normalizeName(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  private getDocumentViewUrl(url: string): string {
    const match = url.match(/\/d\/([^\/]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  }

  private findMatchingPdfKey(audioKey: string, readingData: any): string {
    const audioNumber = this.extractNumber(audioKey);
    
    for (const key of Object.keys(readingData)) {
      const pdfNumber = this.extractNumber(key);
      if (pdfNumber === audioNumber) {
        return key;
      }
    }
    
    const normalizedAudioKey = this.normalizeName(audioKey);
    for (const key of Object.keys(readingData)) {
      const normalizedPdfKey = this.normalizeName(key);
      if (normalizedAudioKey.includes(normalizedPdfKey) || normalizedPdfKey.includes(normalizedAudioKey)) {
        return key;
      }
    }
    
    return null;
  }

  private handleDataError(error: any, loaderTimer: any, loading: HTMLIonLoadingElement) {
    clearTimeout(loaderTimer);
    if (loading) loading.dismiss();
    this.ngZone.run(() => {
      console.error('Firebase error:', error);
      this.error = 'Failed to load lessons.';
      this.isLoading = false;
    });
  }

  // Convert Google Drive view link to a direct download URL (for audio only)
  private convertToEmbedUrl(url: string): string {
    const match = url.match(/\/d\/([^\/]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return url;
  }

  // Generate proxy URL
  private getProxyUrl(originalUrl: string): string {
    return `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`;
  }

  private extractNumber(name: string): number {
    const match = name.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  }

  ngOnDestroy() {
    this.stopAudio();
    this.stopAutoScroll();
  }

  stopAudio() {
    if (this.player) {
      this.player.stop();
      this.player.unload();
      this.player = null;
    }
    this.isPlaying = false;
    this.activeTrack = null;
    this.stopAutoScroll();
  }

  async start(track: Track) {
    // For document-only items, just open the document
    if (track.isDocumentOnly) {
      this.loadDocument(track.pdfUrl, track.pdfName);
      return;
    }

    // Set loading state for this specific track
    track.loading = true;
    
    // Reset other tracks' loading state
    this.playlist.forEach(t => {
      if (t !== track && t.loading) {
        t.loading = false;
      }
    });

    this.stopAudio();
    console.log('Starting track:', track.name);

    // Load document if available
    if (track.pdfUrl) {
      this.loadDocument(track.pdfUrl, track.pdfName);
    } else {
      this.currentPdfUrl = null;
      this.currentPdfName = 'No document available for this lesson';
      this.showPdfViewer = false;
    }

    this.player = new Howl({
      src: [track.proxyPath],
      html5: true,
      preload: true,
      format: ['m4a', 'mp3', 'aac', 'wav'],
      onplay: () => {
        console.log('✅ Audio started playing:', track.name);
        this.isPlaying = true;
        this.activeTrack = track;
        track.loading = false;
        this.updateProgress();
        
        // Start auto-scroll if document is open and auto-scroll is enabled
        if (this.showPdfViewer && this.autoScrollEnabled) {
          setTimeout(() => {
            this.startAutoScroll();
          }, 1000);
        }
      },
      onload: () => {
        console.log('✅ Audio loaded successfully');
      },
      onpause: () => {
        this.isPlaying = false;
        this.stopAutoScroll();
      },
      onend: () => {
        this.isPlaying = false;
        track.loading = false;
        this.stopAutoScroll();
        this.next();
      },
      onloaderror: (id, error) => {
        console.error('❌ Proxy load error:', error);
        track.loading = false;
        this.handleAudioError(track);
      },
      onplayerror: (id, error) => {
        console.error('❌ Proxy play error:', error);
        track.loading = false;
        this.handleAudioError(track);
      },
    });

    this.player.play();
  }

  // New method to open document directly (for document-only items)
  openDocument(track: Track) {
    if (track.pdfUrl) {
      this.loadDocument(track.pdfUrl, track.pdfName);
    }
  }

  async loadDocument(documentUrl: string, documentName: string) {
    this.isPdfLoading = true;
    this.currentPdfName = documentName;
    this.showPdfViewer = true;
    
    console.log('Loading document URL:', documentUrl);
    
    this.currentPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(documentUrl);
    
    setTimeout(() => {
      this.isPdfLoading = false;
    }, 3000);
  }

  startAutoScroll() {
    this.stopAutoScroll();

    if (!this.player || !this.isPlaying || !this.autoScrollEnabled) return;

    this.scrollInterval = setInterval(() => {
      if (this.player && this.isPlaying) {
        const iframe = this.pdfIframe?.nativeElement as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          try {
            iframe.contentWindow.scrollBy(0, 2);
          } catch (e) {
            const container = this.pdfViewer?.nativeElement;
            if (container) {
              container.scrollTop += 2;
            }
          }
        } else {
          const container = this.pdfViewer?.nativeElement;
          if (container) {
            container.scrollTop += 2;
          }
        }
      } else {
        this.stopAutoScroll();
      }
    }, 100);
  }

  stopAutoScroll() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }

  toggleAutoScroll() {
    this.autoScrollEnabled = !this.autoScrollEnabled;
    if (this.autoScrollEnabled && this.isPlaying && this.showPdfViewer) {
      this.startAutoScroll();
    } else {
      this.stopAutoScroll();
    }
  }

  async handleAudioError(track: Track) {
    this.stopAudio();
    track.loading = true;
    
    console.log('Trying fallback to direct URL for:', track.name);
    
    this.player = new Howl({
      src: [track.path],
      html5: true,
      format: ['m4a', 'mp3', 'aac', 'wav'],
      onplay: () => {
        console.log('✅ Audio started via direct URL (fallback)');
        this.isPlaying = true;
        this.activeTrack = track;
        track.loading = false;
        this.updateProgress();
      },
      onloaderror: (id, error) => {
        console.error('❌ Direct URL also failed:', error);
        track.loading = false;
        this.showFinalError(track.name);
      },
      onplayerror: (id, error) => {
        console.error('❌ Direct URL play error:', error);
        track.loading = false;
        this.showFinalError(track.name);
      },
    });

    this.player.play();
  }

  async showFinalError(trackName: string) {
    const alert = await this.alertCtrl.create({
      header: 'Audio Playback Failed',
      message: `Cannot play "${trackName}". Please check your internet connection and try again.`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  togglePlayer(pause: boolean) {
    if (!this.player) return;
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
      this.stopAutoScroll();
    } else {
      this.player.play();
      if (this.showPdfViewer && this.autoScrollEnabled) {
        setTimeout(() => {
          this.startAutoScroll();
        }, 500);
      }
    }
  }

  next() {
    if (!this.activeTrack || this.playlist.length === 0) return;
    const index = this.playlist.indexOf(this.activeTrack);
    const nextTrack = this.playlist[(index + 1) % this.playlist.length];
    this.start(nextTrack);
  }

  prev() {
    if (!this.activeTrack || this.playlist.length === 0) return;
    const index = this.playlist.indexOf(this.activeTrack);
    const prevTrack = index > 0 ? this.playlist[index - 1] : this.playlist[this.playlist.length - 1];
    this.start(prevTrack);
  }

  seek() {
    if (!this.player) return;
    const newValue = +this.range.value;
    const duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }

  updateProgress() {
    if (!this.player || !this.isPlaying) return;
    const seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(() => this.updateProgress(), 1000);
  }

  retryLoading() {
    this.loadAudioAndReadingLessons();
  }

  closePdfViewer() {
    this.showPdfViewer = false;
    this.currentPdfUrl = null;
    this.stopAutoScroll();
  }

  downloadDocument() {
    if (this.activeTrack) {
      const readingData = JSON.parse(localStorage.getItem('readingData') || '{}');
      const pdfKey = this.findMatchingPdfKey(this.activeTrack.name, readingData);
      
      if (pdfKey && readingData[pdfKey]) {
        const originalUrl = readingData[pdfKey];
        const match = originalUrl.match(/\/d\/([^\/]+)/);
        
        if (match && match[1]) {
          const fileId = match[1];
          const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
          
          const downloadLink = document.createElement('a');
          downloadLink.href = downloadUrl;
          downloadLink.download = this.currentPdfName;
          downloadLink.target = '_blank';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      }
    }
  }
}
