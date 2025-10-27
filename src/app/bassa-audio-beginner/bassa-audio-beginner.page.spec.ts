import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BassaAudioBeginnerPage } from './bassa-audio-beginner.page';

describe('BassaAudioBeginnerPage', () => {
  let component: BassaAudioBeginnerPage;
  let fixture: ComponentFixture<BassaAudioBeginnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BassaAudioBeginnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BassaAudioBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
