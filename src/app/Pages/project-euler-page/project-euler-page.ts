import { Component, OnInit, inject, model} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LinkList } from '../../SharedComponents/Organizational/link-list/link-list';
import { ContentFrame } from '../../SharedComponents/content-frame';

import { Content } from '../../Interfaces/IContent';
import { LandingLeft } from '../landing-page/landing-left/landing-left';
import { LandingRight } from '../landing-page/landing-right/landing-right';
import { ProjectEuler1 } from '../../Content/project-euler1';

@Component({
  selector: 'app-project-euler-page',
  imports: [ContentFrame, LandingLeft, LandingRight],
  templateUrl: './project-euler-page.html',
  styleUrl: './project-euler-page.css',
})
export class ProjectEulerPage{
  readonly route = inject(ActivatedRoute);
  ProblemNumber: number;
  PageContent: Content;
  constructor() {
    this.ProblemNumber = parseInt(this.route.snapshot.paramMap.get('problemNumber') ?? '1');
    this.PageContent = this.LoadProblemContent(this.ProblemNumber);
  }
  LoadProblemContent(problemNumber: number): Content {
    switch (problemNumber) {
      case 1:
        return new ProjectEuler1();
      default:
        return new ProjectEuler1();
    }
  }
}
