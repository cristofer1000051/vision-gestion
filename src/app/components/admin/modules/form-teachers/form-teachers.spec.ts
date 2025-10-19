import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeachers } from './form-teachers';

describe('FormTeachers', () => {
  let component: FormTeachers;
  let fixture: ComponentFixture<FormTeachers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTeachers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTeachers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
