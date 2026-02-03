import { Component, OnInit, model } from '@angular/core';
import { LinkDirectory } from '../../../SharedComponents/Organizational/link-directory/link-directory';
import { LinkList } from '../../../SharedComponents/Organizational/link-list/link-list';

import { LinkModel } from '../../../Models/LinkModel';

@Component({
  selector: 'app-landing-left',
  imports: [LinkDirectory],
  templateUrl: './landing-left.html',
  styleUrl: './landing-left.css',
})
export class LandingLeft {
  SectionNames = model<string[]>([]);
  LinkDirectoryInfo = model<LinkModel[][]>([]);
  ngOnInit() {
    this.SectionNames.set(this.GetSectionNames());
    this.LinkDirectoryInfo.set([this.GetProjectEulerLinks(10), this.GetDynamicalSystemsLinks()]);
  }
  GetSectionNames() {
    return ['Project Euler 1-100 (In Progress!)','Dynamical Systems'];
  }
  GetProjectEulerLinks(N: number) {
    let result = [];
    for (let i = 1; i < N + 1; i++) {
      result.push(new LinkModel(`Problem ${i}`, `ProjectEuler/${i}`));
    }
    return result;
  }
  GetDynamicalSystemsLinks() {
    return [new LinkModel("Conway's Game of Life", "ConwaysLife")];
  }
}

