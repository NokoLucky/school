import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { IonRange, LoadingController, AlertController } from '@ionic/angular';
import { Howl } from 'howler';
import { db } from '../firebase.config';
import { ref, onValue } from 'firebase/database';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Track {
  name: string;
  path: string;
  proxyPath: string;
  loading?: boolean;
  pdfUrl?: string;
  pdfName?: string;
}

@Component({
  selector: 'app-portuguese-audio-list',
  templateUrl: './portuguese-audio-list.page.html',
  styleUrls: ['./portuguese-audio-list.page.scss'],
})
export class PortugueseAudioListPage implements OnInit {
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
      const audioRef = ref(db, 'Portugues/Beginner Lessons/Audio Lessons');
      const readingRef = ref(db, 'Portugues/Beginner Lessons/Rrading Lessons');

      

      console.log('Loading audio and reading lessons...');

      // Load audio lessons first
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

  // private processLessonsData(audioSnapshot: any, readingSnapshot: any) {
  //   if (audioSnapshot.exists() && readingSnapshot.exists()) {
  //     const audioData = audioSnapshot.val();
  //     const readingData = readingSnapshot.val();
      
  //     // Store reading data for download functionality
  //     localStorage.setItem('readingData', JSON.stringify(readingData));
      
  //     console.log('Audio data:', audioData);
  //     console.log('Reading data:', readingData);

  //     // Create playlist with both audio and document data
  //     this.playlist = Object.keys(audioData).map((key) => {
  //       const directUrl = this.convertToEmbedUrl(audioData[key]);
  //       const proxyUrl = this.getProxyUrl(directUrl);
        
  //       // Find matching document by name
  //       const pdfKey = this.findMatchingPdfKey(key, readingData);
  //       const documentUrl = pdfKey ? this.getDocumentViewUrl(readingData[pdfKey]) : null;
        
  //       return {
  //         name: key,
  //         path: directUrl,
  //         proxyPath: proxyUrl,
  //         pdfUrl: documentUrl,
  //         pdfName: pdfKey || 'No document available',
  //         loading: false
  //       };
  //     });

  //     this.playlist.sort((a, b) => this.extractNumber(a.name) - this.extractNumber(b.name));
  //     console.log('Final playlist with documents:', this.playlist);
  //   } else {
  //     console.log('No lessons found');
  //     this.error = 'No lessons available.';
  //   }
  //   this.isLoading = false;
  // }

private processLessonsData(audioSnapshot: any, readingSnapshot: any) {
  if (audioSnapshot.exists() && readingSnapshot.exists()) {
    const audioData = audioSnapshot.val();
    const readingData = readingSnapshot.val();
    
    // Store reading data for download functionality
    localStorage.setItem('readingData', JSON.stringify(readingData));
    
    console.log('Audio data:', audioData);
    console.log('Reading data:', readingData);

    // Create playlist with both audio and document data
    this.playlist = Object.keys(audioData).map((key) => {
      const directUrl = this.convertToEmbedUrl(audioData[key]);
      const proxyUrl = this.getProxyUrl(directUrl);
      
      // Find matching document by name
      const pdfKey = this.findMatchingPdfKey(key, readingData);
      const documentUrl = pdfKey ? this.getDocumentViewUrl(readingData[pdfKey]) : null;
      
      return {
        name: pdfKey || key, // Use PDF name if available, otherwise fallback to audio name
        path: directUrl,
        proxyPath: proxyUrl,
        pdfUrl: documentUrl,
        pdfName: pdfKey || 'No document available',
        loading: false,
        hasDocument: !!pdfKey // Add this flag for easy checking
      };
    });

    this.playlist.sort((a, b) => this.extractNumber(a.name) - this.extractNumber(b.name));
    console.log('Final playlist with documents:', this.playlist);
  } else {
    console.log('No lessons found');
    this.error = 'No lessons available.';
  }
  this.isLoading = false;
}

  private getDocumentViewUrl(url: string): string {
    const match = url.match(/\/d\/([^\/]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      // Use Google Drive preview for all file types
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
    
    const normalizedAudioKey = audioKey.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (const key of Object.keys(readingData)) {
      const normalizedPdfKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
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
          }, 1000); // Wait a bit for the iframe to load
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

  async loadDocument(documentUrl: string, documentName: string) {
    this.isPdfLoading = true;
    this.currentPdfName = documentName;
    this.showPdfViewer = true;
    
    console.log('Loading document URL:', documentUrl);
    
    // Sanitize the URL here and store it directly
    this.currentPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(documentUrl);
    
    setTimeout(() => {
      this.isPdfLoading = false;
    }, 3000);
  }

  startAutoScroll() {
    this.stopAutoScroll(); // Clear any existing interval

    if (!this.player || !this.isPlaying || !this.autoScrollEnabled) return;

    this.scrollInterval = setInterval(() => {
      if (this.player && this.isPlaying) {
        // Try to scroll the iframe content first
        const iframe = this.pdfIframe?.nativeElement as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          try {
            // Scroll the iframe content
            iframe.contentWindow.scrollBy(0, 2);
          } catch (e) {
            // If we can't access iframe content due to CORS, scroll the container
            const container = this.pdfViewer?.nativeElement;
            if (container) {
              container.scrollTop += 2;
            }
          }
        } else {
          // Fallback: scroll the container
          const container = this.pdfViewer?.nativeElement;
          if (container) {
            container.scrollTop += 2;
          }
        }
      } else {
        this.stopAutoScroll();
      }
    }, 100); // Scroll every 100ms
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
    const prevTrack =
      index > 0 ? this.playlist[index - 1] : this.playlist[this.playlist.length - 1];
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

  // Add download method for documents
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