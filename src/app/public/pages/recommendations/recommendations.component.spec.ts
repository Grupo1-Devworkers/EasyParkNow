import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationComponent } from './recommendations.component';

describe('RecommendationsComponent', () => {
  let component: RecommendationComponent;
  let fixture: ComponentFixture<RecommendationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationComponent]
    });
    fixture = TestBed.createComponent(RecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
