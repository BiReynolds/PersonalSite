import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRight } from './landing-right';

describe('LandingRight', () => {
  let component: LandingRight;
  let fixture: ComponentFixture<LandingRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingRight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
