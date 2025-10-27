import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YorubaAudioBeginnerPage } from './yoruba-audio-beginner.page';

describe('YorubaAudioBeginnerPage', () => {
  let component: YorubaAudioBeginnerPage;
  let fixture: ComponentFixture<YorubaAudioBeginnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YorubaAudioBeginnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YorubaAudioBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
