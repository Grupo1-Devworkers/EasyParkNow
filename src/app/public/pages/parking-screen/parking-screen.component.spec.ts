import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingScreenComponent } from './parking-screen.component';

describe('ParkingScreenComponent', () => {
  let component: ParkingScreenComponent;
  let fixture: ComponentFixture<ParkingScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkingScreenComponent]
    });
    fixture = TestBed.createComponent(ParkingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
