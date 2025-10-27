// english-audio-list.page.ts
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';

export interface Lesson {
  name: string;
  videoId: string;
}

@Component({
  selector: 'app-english-audio-list',
  templateUrl: './english-audio-list.page.html',
  styleUrls: ['./english-audio-list.page.scss'],
})
export class EnglishAudioListPage implements OnInit {
  lessons: Lesson[] = [
    { name: 'Mindfulness Basics', videoId: 'O5gKpzwkOIE' },
    { name: 'Lesson 2: Advanced Topics', videoId: 'ANOTHER_VIDEO_ID' },
    // add more lessons here
  ];

  selectedLesson: Lesson = null;
  selectedUrl: SafeResourceUrl = null;

  constructor(
    private sanitizer: DomSanitizer,
    private platform: Platform
  ) {
    // Listen for hardware back button (Android)
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.selectedLesson) {
        this.clearSelection();
      }
    });
  }

  ngOnInit() {}

  /**
   * IonViewWillLeave lifecycle hook fires when navigating away (including header back)
   */
  ionViewWillLeave(): void {
    if (this.selectedLesson) {
      this.clearSelection();
    }
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
    const embed = `https://www.youtube.com/embed/${lesson.videoId}?rel=0&modestbranding=1&controls=1`;
    this.selectedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embed);
  }

  clearSelection() {
    this.selectedLesson = null;
    this.selectedUrl = null;
  }
}




// import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// import { IonRange } from '@ionic/angular';
// import { Howl } from 'howler';
// import { HttpClient } from '@angular/common/http';
// import { Subscription } from 'rxjs';

// export interface Track {
//   name: string;
//   path: string;
// }

// @Component({
//   selector: 'app-english-audio-list',
//   templateUrl: './english-audio-list.page.html',
//   styleUrls: ['./english-audio-list.page.scss'],
// })



// export class EnglishAudioListPage implements OnInit, OnDestroy {
//   @ViewChild('range', { static: false }) range: IonRange;

//   playlist: Track[] = [];
//   activeTrack: Track = null;
//   player: Howl = null;
//   isPlaying = false;
//   progress = 0;

//   isLoading = true;
//   showError = false;
//   countdown = 5;
//   currentDot = 1;

//   private countdownInterval: any;
//   private dotInterval: any;
//   private playlistSub: Subscription;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.startLoadingAnimation();
//     this.loadPlaylist();
//   }

//   loadPlaylist() {
//     this.isLoading = true;
//     this.showError = false;

//     this.playlistSub = this.http
//       .get<Track[]>('http://localhost/school/api/playlist.php')
//       .subscribe({
//         next: (tracks) => {
//           if (tracks?.length) {
//             this.playlist = tracks;
//             console.log('Loaded playlist:', tracks);
//           } else {
//             console.warn('Playlist is empty.');
//             this.playlist = [];
//           }
//           this.isLoading = false;
//           this.clearIntervals();
//         },
//         error: (err) => {
//           console.error('Error fetching playlist:', err);
//           this.showError = true;
//           this.isLoading = false;
//           this.clearIntervals();
//         },
//       });
//   }

//   private startLoadingAnimation() {
//     this.countdown = 15;
//     this.currentDot = 1;

//     this.dotInterval = setInterval(() => {
//       this.currentDot = (this.currentDot % 3) + 1;
//     }, 500);

//     this.countdownInterval = setInterval(() => {
//       this.countdown -= 1;
//       if (this.countdown <= 0) {
//         clearInterval(this.countdownInterval);
//       }
//     }, 1000);
//   }

//   private clearIntervals() {
//     if (this.countdownInterval) {
//       clearInterval(this.countdownInterval);
//       this.countdownInterval = null;
//     }
//     if (this.dotInterval) {
//       clearInterval(this.dotInterval);
//       this.dotInterval = null;
//     }
//   }

//   ngOnDestroy() {
//     if (this.player) this.player.stop();
//     if (this.playlistSub) this.playlistSub.unsubscribe();
//     this.clearIntervals();
//   }

//   start(track: Track) {
//     if (this.player) this.player.stop();

//     this.player = new Howl({
//       src: [track.path],
//       html5: true,
//       onplay: () => {
//         this.isPlaying = true;
//         this.activeTrack = track;
//         this.updateProgess();
//       },
//       onend: () => {
//         this.isPlaying = false;
//       },
//     });

//     this.player.play();
//   }

//   togglePlayer(pause: boolean) {
//     this.isPlaying = !pause;
//     pause ? this.player.pause() : this.player.play();
//   }

//   next() {
//     const idx = this.playlist.indexOf(this.activeTrack);
//     this.start(this.playlist[(idx + 1) % this.playlist.length]);
//   }

//   prev() {
//     const idx = this.playlist.indexOf(this.activeTrack);
//     this.start(this.playlist[(idx - 1 + this.playlist.length) % this.playlist.length]);
//   }

//   seek() {
//     const newValue = +this.range.value;
//     const duration = this.player.duration();
//     this.player.seek(duration * (newValue / 100));
//   }

//   updateProgess() {
//     const seek = this.player.seek() as number;
//     this.progress = (seek / this.player.duration()) * 100 || 0;
//     setTimeout(() => this.updateProgess(), 1000);
//   }
// }


// import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// import { IonRange } from '@ionic/angular';
// import { Howl } from 'howler';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Track {
//   name: string;
//   path: string;
// }

// @Component({
//   selector: 'app-english-audio-list',
//   templateUrl: './english-audio-list.page.html',
//   styleUrls: ['./english-audio-list.page.scss'],
// })
// export class EnglishAudioListPage implements OnInit, OnDestroy {
//   @ViewChild('range', { static: false }) range: IonRange;

//   // start with an empty playlist
//   playlist: Track[] = [];
//   activeTrack: Track = null;
//   player: Howl = null;
//   isPlaying = false;
//   progress = 0;
//   // Add new state variables
//   isLoading = true;
//   showError = false;
//   countdown = 5;
//   currentDot = 1;
//   private countdownInterval: any;
//   private dotInterval: any;

//   // inject HttpClient
//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     console.log('Attempting to load playlist from API...'); // 👈 Initial log
//     this.http
//       .get<Track[]>('http://localhost/school/api/playlist.php')
//       .subscribe(
//         tracks => {
//           console.log('Playlist loaded from API:', tracks);
//           // Check if tracks array is populated
//           if (tracks && tracks.length > 0) {
//             console.log('First track path:', tracks[0].path); // 👈 Verify path
//           }
//           this.playlist = tracks;
//         },
//         err => {
//           console.error('Failed to load playlist', err);
//           // Handle empty playlist
//           this.playlist = []; 
//         }
//       );

//       this.startLoadingAnimation();
//       this.loadPlaylist();
//   }

//   loadPlaylist() {
//     this.isLoading = true;
//     this.showError = false;
    
//     // Start countdown animation
//     this.startLoadingAnimation();

//     this.http.get<Track[]>('http://localhost/school/api/playlist.php')
//       .subscribe({
//         next: (tracks) => {
//           this.playlist = tracks;
//           this.isLoading = false;
//           this.clearIntervals();
//         },
//         error: (err) => {
//           console.error(err);
//           this.isLoading = false;
//           this.showError = true;
//           this.clearIntervals();
//         }
//       });
//   }

//   private startLoadingAnimation() {
//     this.countdown = 5;
//     this.currentDot = 1;
    
//     // Dot animation
//     this.dotInterval = setInterval(() => {
//       this.currentDot = this.currentDot % 3 + 1;
//     }, 500);

//     // Countdown animation
//     this.countdownInterval = setInterval(() => {
//       this.countdown = Math.max(0, this.countdown - 1);
//       if (this.countdown <= 0) {
//         this.countdown = 5; // Reset countdown
//       }
//     }, 1000);
//   }

//   private clearIntervals() {
//     if (this.countdownInterval) clearInterval(this.countdownInterval);
//     if (this.dotInterval) clearInterval(this.dotInterval);
//   }
  

//   ngOnDestroy() {
//     if (this.player) {
//       this.player.stop();
//     }
//   }

//   start(track: Track) {
//     if (this.player) {
//       this.player.stop();
//     }
//     this.player = new Howl({
//       src: [track.path],
//       html5: true,    // ensure streaming of large files
//       onplay: () => {
//         this.isPlaying = true;
//         this.activeTrack = track;
//         this.updateProgess();
//       },
//       onend: () => {
//         this.isPlaying = false;
//       }
//     });
//     this.player.play();
//   }

//   togglePlayer(pause: boolean) {
//     this.isPlaying = !pause;
//     pause ? this.player.pause() : this.player.play();
//   }

//   next() {
//     const idx = this.playlist.indexOf(this.activeTrack);
//     this.start(this.playlist[(idx + 1) % this.playlist.length]);
//   }

//   prev() {
//     const idx = this.playlist.indexOf(this.activeTrack);
//     this.start(this.playlist[(idx - 1 + this.playlist.length) % this.playlist.length]);
//   }

//   seek() {
//     const newValue = +this.range.value;
//     const duration = this.player.duration();
//     this.player.seek(duration * (newValue / 100));
//   }

//   updateProgess() {
//     const seek = this.player.seek() as number;
//     this.progress = (seek / this.player.duration()) * 100 || 0;
//     setTimeout(() => this.updateProgess(), 1000);
//   }
// }


// import { Component, OnInit, ViewChild } from '@angular/core';
// import { IonRange } from '@ionic/angular';
// import { Howl } from 'howler';

// export interface Track {
//   name: string;
//   path: string;
// }

// @Component({
//   selector: 'app-english-audio-list',
//   templateUrl: './english-audio-list.page.html',
//   styleUrls: ['./english-audio-list.page.scss'],
// })
// export class EnglishAudioListPage implements OnInit {

//   playlist: Track[] = [
//     {name: 'Unit 1 comment',
//      path: 'assets/mp3/english/Audio ENG/unit 1 comment ca va.m4a'
//     },
//     {name: 'Unit 1',
//      path: 'assets/mp3/english/Audio ENG/Unit 1.m4a' 
//     },
//     {name: 'Unit 2',
//     path: 'assets/mp3/english/Audio ENG/Unit 2.m4a'
//     },
//     {name: 'Unit 3',
//      path: 'assets/mp3/english/Audio ENG/Unit 3.m4a'
//     },
//     {name: 'Unit 4',
//      path: 'assets/mp3/english/Audio ENG/Unit 4.m4a'
//     },
//     {name: 'Jessica Audio 1',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 11.59.13.mp4'
//     },
//     {name: 'Jessica Audio 2',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 11.59.14.mp4'
//     },
//     {name: 'Jessica Audio 3',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 11.59.14.mp4'
//     } ,
//     {name: 'Jessica Audio 4',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 12.08.09.mp4'
//     },
//     {name: 'Jessica Audio 5',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.01.18.mp4'
//     },
//     {name: 'Jessica Audio 6',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.05.26.mp4'
//     },
//     {name: 'Jessica Audio 7',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.05.31.mp4'
//     },
//     {name: 'Jessica Audio 8',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.09.52.mp4'
//     },
//     {name: 'Jessica Audio 9',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.15.01.mp4'
//     },
//     {name: 'Jessica Audio 10',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.15.14.mp4'
//     },
//     {name: 'Jessica Audio 11',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.16.53.mp4'
//     },
//     {name: 'Jessica Audio 12',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.22.48.mp4'
//     },
//     {name: 'Jessica Audio 13',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.22.49.mp4'
//     },
//     {name: 'Jessica Audio 14',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.34.58.mp4'
//     },
//     {name: 'Jessica Audio 15',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 19.45.31.mp4'
//     },
//     {name: 'Jessica Audio 16',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 20.05.34.mp4'
//     },
//     {name: 'Jessica Audio 17',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 20.05.35.mp4'
//     } ,
//     {name: 'Jessica Audio 18',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 20.16.43.mp4'
//     },
//     {name: 'Jessica Audio 19',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 21.53.15.mp4'
//     },
//     {name: 'Jessica Audio 20',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 21.53.21.mp4'
//     },
//     {name: 'Jessica Audio 21',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 21.54.08.mp4'
//     },
//     {name: 'Jessica Audio 22',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 22.05.38.mp4'
//     },
//     {name: 'Jessica Audio 23',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-27 at 22.06.49.mp4'
//     },
//     {name: 'Jessica Audio 24',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.11.53.mp4'
//     },
//     {name: 'Jessica Audio 25',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.12.00.mp4'
//     },
//     {name: 'Jessica Audio 26',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.13.01.mp4'
//     },
//     {name: 'Jessica Audio 27',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.13.04.mp4'
//     },
//     {name: 'Jessica Audio 28',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.13.05.mp4'
//     },
//     {name: 'Jessica Audio 29',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.13.06.mp4'
//     },
//     {name: 'Jessica Audio 30',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.13.07.mp4'
//     },
//     {name: 'Jessica Audio 31',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.14.03.mp4'
//     },
//     {name: 'Jessica Audio 32',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.15.47.mp4'
//     },
//     {name: 'Jessica Audio 33',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.16.15.mp4'
//     },
//     {name: 'Jessica Audio 34',
//      path: 'assets/mp3/english/Jessica/WhatsApp Audio 2019-04-28 at 15.16.29.mp4'
//     },
//     {name: 'Lara Unit 1 comment ca',
//      path: 'assets/mp3/english/Lara/unit 1 comment ca va.m4a'
//     },
//     {name: 'Lara Unit 1',
//      path: 'assets/mp3/english/Lara/Unit 1.m4a'
//     },
//     {name: 'Lara Unit 2',
//      path: 'assets/mp3/english/Lara/Unit 2.m4a'
//     },
//     {name: 'Lara Unit 3',
//      path: 'assets/mp3/english/Lara/Unit 3.m4a'
//     },
//     {name: 'Lara Unit 4',
//      path: 'assets/mp3/english/Lara/Unit 4.m4a'
//     },
//     {name: 'Lara Unit 5',
//      path: 'assets/mp3/english/Lara/Unit 5.m4a'
//     },
//     {name: 'Lara Unit 6',
//      path: 'assets/mp3/english/Lara/Unit 6.m4a'
//     },
//     {name: 'Lara Unit 7',
//      path: 'assets/mp3/english/Lara/Unit 7.m4a'
//     },
//     {name: 'Lara Unit 8',
//      path: 'assets/mp3/english/Lara/Unit 8.m4a'
//     },
//     {name: 'Lara Unit 9',
//      path: 'assets/mp3/english/Lara/Unit 9.m4a'
//     },
//     {name: 'Lara Unit 10',
//      path: 'assets/mp3/english/Lara/Unit 10.m4a'
//     },
//     {name: 'Lara Unit 11',
//      path: 'assets/mp3/english/Lara/Unit 11.m4a'
//     },
//     {name: 'Lara Unit 12',
//      path: 'assets/mp3/english/Lara/Unit 12.m4a'
//     },
//     {name: 'Lara Unit 13',
//      path: 'assets/mp3/english/Lara/Unit 13.m4a'
//     },
//     {name: 'Lara Unit 14',
//      path: 'assets/mp3/english/Lara/Unit 14.m4a'
//     },
//     {name: 'Lara Unit 15',
//      path: 'assets/mp3/english/Lara/Unit 15.m4a'
//     },
//     {name: 'Lara Unit 16 part 1',
//      path: 'assets/mp3/english/Lara/Unit 16 part 1.m4a'
//     },
//     {name: 'Lara Unit 16 part 2 and 3',
//      path: 'assets/mp3/english/Lara/unit 16 parts 2 and3.m4a'
//     },
//     {name: 'Lara Unit 17',
//      path: 'assets/mp3/english/Lara/Unit 17.m4a'
//     }
    
//   ];

//   activeTrack: Track = null;
//   player: Howl = null;
//   isPlaying = false;
//   progress = 0;
//   @ViewChild('range',{static: false}) range: IonRange;

//   constructor() { }

//   ngOnInit() {
//   }

//   ngOnDestroy()
//   {
//     if(this.player){
//       this.player.stop();
//     }
//   }

//   start(track: Track){
//     if(this.player){
//       this.player.stop();
//     }
//     this.player = new Howl({
//       src:[track.path],
//       onplay: () => {
//         console.log('onplay');
//         this.isPlaying = true;
//         this.activeTrack = track;
//         this.updateProgess();
//       },
//       onend: () => {
//         console.log('onend');
//         this.isPlaying = false;
//       }
//     });
//     this.player.play();
//   }

//   togglePlayer(pause){

//     this.isPlaying = !pause;
//     if(pause){
//       this.player.pause();
//     }else {
//       this.player.play();
//     }
//   }

//   next()
//   {
//     let index = this.playlist.indexOf(this.activeTrack);
//     if(index != this.playlist.length - 1){
//       this.start(this.playlist[index + 1]);
//     }else{
//       this.start(this.playlist[0]);
//     }
//   }

//   prev(){
//     let index = this.playlist.indexOf(this.activeTrack);
//     if(index > 0){
//       this.start(this.playlist[index - 1]);
//     }else{
//       this.start(this.playlist[this.playlist.length - 1]);
//     }
//   }

//   seek(){
//     let newValue = +this.range.value;
//     let duration = this.player.duration();
//     this.player.seek(duration * (newValue / 100));
//   }

//   updateProgess()
//   {
//     let seek = this.player.seek();
//     this.progress = (seek / this.player.duration()) * 100 || 0;
//     setTimeout(() => {
//       this.updateProgess();
//     }, 1000);
//   }

// }





