import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerHebComponent } from './datepicker-heb.component';

describe('DatepickerHebComponent', () => {
  let component: DatepickerHebComponent;
  let fixture: ComponentFixture<DatepickerHebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerHebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerHebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
