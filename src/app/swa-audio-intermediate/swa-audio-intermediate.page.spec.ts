import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwaAudioIntermediatePage } from './swa-audio-intermediate.page';

describe('SwaAudioIntermediatePage', () => {
  let component: SwaAudioIntermediatePage;
  let fixture: ComponentFixture<SwaAudioIntermediatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaAudioIntermediatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwaAudioIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
