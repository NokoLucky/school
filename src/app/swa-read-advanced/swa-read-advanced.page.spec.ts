import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwaReadAdvancedPage } from './swa-read-advanced.page';

describe('SwaReadAdvancedPage', () => {
  let component: SwaReadAdvancedPage;
  let fixture: ComponentFixture<SwaReadAdvancedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwaReadAdvancedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwaReadAdvancedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
