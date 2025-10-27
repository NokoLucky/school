import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WolofAudioBeginnerPage } from './wolof-audio-beginner.page';

describe('WolofAudioBeginnerPage', () => {
  let component: WolofAudioBeginnerPage;
  let fixture: ComponentFixture<WolofAudioBeginnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WolofAudioBeginnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WolofAudioBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
