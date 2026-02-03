import { Component, OnInit, model } from '@angular/core';
import { GameGrid } from '../../SharedComponents/GameElements/game-grid/game-grid';

import { ConwaysLifeMethods } from '../../Models/ConwaysLifeMethods';
import { GameGridModel } from '../../Models/GameGridModel';

@Component({
  selector: 'app-conways-life',
  imports: [GameGrid],
  templateUrl: './conways-life.html',
  styleUrl: './conways-life.css',
})
export class ConwaysLife {
  Playing: boolean = false;
  GameGridView = new GameGrid();
  GameGridModel = new GameGridModel(3,3);
  TogglePlaying() {
    console.log(this.Playing);
    this.Playing = !this.Playing;
    if (this.Playing) {
      this.GameGridView.MakeSquaresUneditable();
    }
    else {
      this.GameGridView.MakeSquaresEditable();
    }
  }
}
