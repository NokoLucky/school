import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngBeginUnit23Page } from './eng-begin-unit23.page';

describe('EngBeginUnit23Page', () => {
  let component: EngBeginUnit23Page;
  let fixture: ComponentFixture<EngBeginUnit23Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EngBeginUnit23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngBeginUnit23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
