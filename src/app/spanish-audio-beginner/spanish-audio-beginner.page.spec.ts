import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpanishAudioBeginnerPage } from './spanish-audio-beginner.page';

describe('SpanishAudioBeginnerPage', () => {
  let component: SpanishAudioBeginnerPage;
  let fixture: ComponentFixture<SpanishAudioBeginnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishAudioBeginnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpanishAudioBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
