import { GameGridModel } from './GameGridModel';

export class ConwaysLifeMethods {
  static GetGrid(numRows: number, numCols: number): GameGridModel {
    return new GameGridModel(numRows, numCols);
  }
  static SetValueAtPos(grid: GameGridModel, row: number, col: number, value: boolean) {
    grid.GridSquares[row][col] = value;
  }
}
