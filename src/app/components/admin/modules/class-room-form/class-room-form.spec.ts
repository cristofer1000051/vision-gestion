import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomForm } from './class-room-form';

describe('ClassRoomForm', () => {
  let component: ClassRoomForm;
  let fixture: ComponentFixture<ClassRoomForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassRoomForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassRoomForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
