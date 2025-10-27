import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EngBeginUnit30Page } from './eng-begin-unit30.page';

describe('EngBeginUnit30Page', () => {
  let component: EngBeginUnit30Page;
  let fixture: ComponentFixture<EngBeginUnit30Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EngBeginUnit30Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EngBeginUnit30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
