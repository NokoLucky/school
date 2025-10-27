import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngBeginUnit21Page } from './eng-begin-unit21.page';

describe('EngBeginUnit21Page', () => {
  let component: EngBeginUnit21Page;
  let fixture: ComponentFixture<EngBeginUnit21Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EngBeginUnit21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngBeginUnit21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
