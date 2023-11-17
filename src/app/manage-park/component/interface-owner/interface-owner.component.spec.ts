import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceOwnerComponent } from './interface-owner.component';

describe('InterfaceOwnerComponent', () => {
  let component: InterfaceOwnerComponent;
  let fixture: ComponentFixture<InterfaceOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceOwnerComponent]
    });
    fixture = TestBed.createComponent(InterfaceOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
