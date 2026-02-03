import { Component, WritableSignal, signal } from '@angular/core';
import { LandingLeft } from './landing-left/landing-left';
import { LandingMain } from './landing-main/landing-main';
import { LandingRight } from './landing-right/landing-right';

@Component({
  selector: 'app-landing-page',
  imports: [LandingLeft, LandingMain, LandingRight],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  Title: WritableSignal<string> = signal('Welcome!');
  MainPanel: LandingMain = new LandingMain();
  LeftPanel: LandingLeft = new LandingLeft();
  RightPanel: LandingRight = new LandingRight();
}
