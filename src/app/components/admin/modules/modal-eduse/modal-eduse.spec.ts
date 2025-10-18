import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEduse } from './modal-eduse';

describe('ModalEduse', () => {
  let component: ModalEduse;
  let fixture: ComponentFixture<ModalEduse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEduse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEduse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
