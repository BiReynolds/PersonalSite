export class GameGridModel {
  NumRows: number;
  NumCols: number;
  GridSquares: boolean[][];
  constructor(numRows: number, numCols: number) {
    this.NumRows = numRows;
    this.NumCols = numCols;
    this.GridSquares = [];
    for (let row = 0; row < numRows; row++) {
      let newRow = [];
      for (let col = 0; col < numCols; col++) {
        newRow.push(false);
      }
      this.GridSquares.push(newRow);
    }
  }
  GetSquare(row: number, col: number) {
    return this.GridSquares[row][col];
  }
}
