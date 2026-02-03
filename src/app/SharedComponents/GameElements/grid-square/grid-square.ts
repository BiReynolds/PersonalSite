import { Component, model, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-square',
  imports: [],
  templateUrl: './grid-square.html',
})
export class GridSquare {
  State = model<boolean>(false);
  ColorString = computed(()=>this.GetColorFromState(this.State()));

  Editable = true;
  GetColorFromState(state: boolean) {
    if (state) {
      return "rgb(0,0,0)";
    }
    else {
      return "rgb(200,200,200)";
    }
  }
  UpdateState(newValue: boolean) {
    console.log("yippee");
    this.State.set(newValue);
  }
  FlipStateIfEditable() {
    if (this.Editable) {
      this.State.set(!this.State());
    }
  }
}
