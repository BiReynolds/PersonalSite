import { Routes } from '@angular/router';
import { LandingPage } from './Pages/landing-page/landing-page';
import { ConwaysLife } from './Pages/conways-life/conways-life';
import { ProjectEulerPage } from './Pages/project-euler-page/project-euler-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'ConwaysLife', component: ConwaysLife },
  { path: 'ProjectEuler/:problemNumber', component: ProjectEulerPage }
];
