import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudents } from './form-students';

describe('FormStudents', () => {
  let component: FormStudents;
  let fixture: ComponentFixture<FormStudents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormStudents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStudents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
