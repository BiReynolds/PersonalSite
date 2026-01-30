import { Routes } from '@angular/router';
import { LandingPage } from './Pages/landing-page/landing-page';
import { ConwaysLife } from './Pages/conways-life/conways-life';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'ConwaysLife', component: ConwaysLife }
];
