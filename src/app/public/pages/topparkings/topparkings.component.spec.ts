import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopparkingsComponent } from './topparkings.component';

describe('TopparkingsComponent', () => {
  let component: TopparkingsComponent;
  let fixture: ComponentFixture<TopparkingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopparkingsComponent]
    });
    fixture = TestBed.createComponent(TopparkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
