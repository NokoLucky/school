import { Component, OnInit } from '@angular/core';

interface LessonImage {
  src: string;
  label: string;
  selected?: boolean;
  isCorrectSelection?: boolean; // true for correct (green), false for wrong (red)
}

@Component({
  selector: 'app-eng-del4',
  templateUrl: './eng-del4.page.html',
  styleUrls: ['./eng-del4.page.scss'],
})
export class EngDel4Page implements OnInit {

  // Full list of images.
  lessonImages: LessonImage[] = [
    { src: 'assets/Travelling/bus.png', label: 'Bus' },
    { src: 'assets/Travelling/airplane.png', label: 'Airplane' },
    { src: 'assets/Travelling/hotel.png', label: 'Hotel' },
    { src: 'assets/Travelling/train.png', label: 'Train' },
    { src: 'assets/Travelling/location.png', label: 'Location' },
    { src: 'assets/Travelling/map.png', label: 'Map' },
    { src: 'assets/Travelling/passport.png', label: 'Passport' },
    { src: 'assets/Travelling/suitcase.png', label: 'Suitcase' },
    { src: 'assets/Travelling/ticket.png', label: 'Ticket' },
    { src: 'assets/Travelling/directions.png', label: 'Directions' }
  ];

  // The current set of 4 images shown on screen.
  currentSet: LessonImage[] = [];
  // Flag to enable the Continue button.
  nextActive: boolean = false;
  // The current target label (e.g., "Airplane", "Bus", etc.).
  targetLabel: string = '';
  // Array of targets that still need to be used.
  remainingTargets: LessonImage[] = [];
  // Flag to indicate if the lesson is complete.
  lessonCompleted: boolean = false;

  constructor() { }

  ngOnInit() {
    // Clone all images into the remainingTargets array.
    this.remainingTargets = [...this.lessonImages];
    this.loadNextSet();
  }

  // Loads a new set, using a random target from remainingTargets.
  loadNextSet() {
    // If there are no more targets, mark the lesson as complete.
    if (this.remainingTargets.length === 0) {
      this.lessonCompleted = true;
      return;
    }

    // Select a random target from remainingTargets.
    const randomIndex = Math.floor(Math.random() * this.remainingTargets.length);
    const targetImage = this.remainingTargets.splice(randomIndex, 1)[0];
    this.targetLabel = targetImage.label;

    // Select distractors: images whose label is not the target.
    const distractors = this.lessonImages.filter(img => img.label !== targetImage.label);
    distractors.sort(() => 0.5 - Math.random());
    const chosenDistractors = distractors.slice(0, 3);

    // Combine target and distractors and shuffle.
    const newSet: LessonImage[] = [...chosenDistractors, { ...targetImage }];
    newSet.sort(() => 0.5 - Math.random());

    // Reset selection state.
    newSet.forEach(img => {
      img.selected = false;
      img.isCorrectSelection = undefined;
    });

    this.currentSet = newSet;
    this.nextActive = false;
  }

  // Handles image selection.
  selectImage(image: LessonImage) {
    if (this.nextActive) { return; }

    image.selected = true;

    // Check if the clicked image is the target.
    if (image.label === this.targetLabel) {
      // Clear any wrong (red) borders from other images.
      this.currentSet.forEach(img => {
        if (img.label !== this.targetLabel) {
          img.isCorrectSelection = undefined;
        }
      });
      image.isCorrectSelection = true;
      this.nextActive = true;
    } else {
      // Mark the wrong selection.
      image.isCorrectSelection = false;
    }
  }

  // Advances to the next round.
  onNext() {
    if (this.nextActive) {
      this.loadNextSet();
    }
  }
}
