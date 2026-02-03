import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSquare } from './grid-square';

describe('GridSquare', () => {
  let component: GridSquare;
  let fixture: ComponentFixture<GridSquare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSquare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSquare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
