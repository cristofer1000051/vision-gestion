import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eduse } from './eduse';

describe('Eduse', () => {
  let component: Eduse;
  let fixture: ComponentFixture<Eduse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eduse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eduse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
