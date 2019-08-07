import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FixturesViewComponent} from './fixtures-view/fixtures-view.component';

const routes: Routes = [
  {
    path: 'view',
    component: FixturesViewComponent
  }, {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixturesRoutingModule { }
