import { Component, QueryList, ElementRef, ViewChildren, input } from '@angular/core';
import { GridSquare } from '../grid-square/grid-square';

import { GameGridModel } from '../../../Models/GameGridModel';

@Component({
  selector: 'app-game-grid',
  imports: [GridSquare],
  templateUrl: './game-grid.html',
  styleUrl: './game-grid.css',
})
export class GameGrid {
  Model = input.required<GameGridModel>();
  @ViewChildren(GridSquare) Squares!: QueryList<GridSquare>;
  MakeSquaresUneditable() {
    this.Squares.forEach(input => input.Editable = false);
  }
  MakeSquaresEditable() {
    this.Squares.forEach(input => input.Editable = true);
  }
}
