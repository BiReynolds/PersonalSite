import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLeft } from './landing-left';

describe('LandingLeft', () => {
  let component: LandingLeft;
  let fixture: ComponentFixture<LandingLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingLeft);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
