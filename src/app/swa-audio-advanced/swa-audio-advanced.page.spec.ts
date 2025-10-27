import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwaAudioAdvancedPage } from './swa-audio-advanced.page';

describe('SwaAudioAdvancedPage', () => {
  let component: SwaAudioAdvancedPage;
  let fixture: ComponentFixture<SwaAudioAdvancedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaAudioAdvancedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwaAudioAdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
