import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwaAudioBeginnerPage } from './swa-audio-beginner.page';

describe('SwaAudioBeginnerPage', () => {
  let component: SwaAudioBeginnerPage;
  let fixture: ComponentFixture<SwaAudioBeginnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaAudioBeginnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwaAudioBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
