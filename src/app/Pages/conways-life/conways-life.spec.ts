import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConwaysLife } from './conways-life';

describe('ConwaysLife', () => {
  let component: ConwaysLife;
  let fixture: ComponentFixture<ConwaysLife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConwaysLife]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConwaysLife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
