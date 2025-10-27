import { Component, OnInit } from '@angular/core';

interface LessonImage {
  src: string;
  label: string;
  selected?: boolean;
  isCorrectSelection?: boolean; // true: correct (green), false: wrong (red)
}

@Component({
  selector: 'app-eng-restaurants',
  templateUrl: './eng-restaurants.page.html',
  styleUrls: ['./eng-restaurants.page.scss'],
})
export class EngRestaurantsPage implements OnInit {

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

  // The current set of 4 options.
  currentSet: LessonImage[] = [];
  // Flag to enable the Continue button.
  nextActive: boolean = false;
  // The current target label (for example, "Airplane" or "Bus").
  targetLabel: string = '';
  // Array of targets that still need to be used.
  remainingTargets: LessonImage[] = [];
  // Flag to indicate if the lesson is complete.
  lessonCompleted: boolean = false;

  constructor() { }

  ngOnInit() {
    // Clone all images into remainingTargets.
    this.remainingTargets = [...this.lessonImages];
    this.loadNextSet();
  }

  // Loads a new set by selecting one random target from remainingTargets,
  // then picking three distractors.
  loadNextSet() {
    if (this.remainingTargets.length === 0) {
      this.lessonCompleted = true;
      return;
    }

    // Select a random target image.
    const randomIndex = Math.floor(Math.random() * this.remainingTargets.length);
    const targetImage = this.remainingTargets.splice(randomIndex, 1)[0];
    this.targetLabel = targetImage.label;

    // Select distractors: images whose label does not match the target.
    const distractors = this.lessonImages.filter(img => img.label !== targetImage.label);
    distractors.sort(() => 0.5 - Math.random());
    const chosenDistractors = distractors.slice(0, 3);

    // Combine target and distractors, then shuffle.
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

  // Called when the kid taps on a card (which contains the image and radio button).
  selectAnswer(image: LessonImage) {
    if (this.nextActive) { return; }
    image.selected = true;

    if (image.label === this.targetLabel) {
      // Correct answer: clear any wrong indicators.
      this.currentSet.forEach(img => {
        if (img.label !== this.targetLabel) {
          img.isCorrectSelection = undefined;
        }
      });
      image.isCorrectSelection = true;
      this.nextActive = true;
    } else {
      // Wrong answer: mark it red.
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

