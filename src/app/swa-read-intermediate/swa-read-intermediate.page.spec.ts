import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwaReadIntermediatePage } from './swa-read-intermediate.page';

describe('SwaReadIntermediatePage', () => {
  let component: SwaReadIntermediatePage;
  let fixture: ComponentFixture<SwaReadIntermediatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaReadIntermediatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwaReadIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
