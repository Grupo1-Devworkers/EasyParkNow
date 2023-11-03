import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservationComponent } from './modal-reservation.component';

describe('ModalReservationComponent', () => {
  let component: ModalReservationComponent;
  let fixture: ComponentFixture<ModalReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalReservationComponent]
    });
    fixture = TestBed.createComponent(ModalReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
