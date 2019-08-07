import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaguesViewComponent} from './leagues-view/leagues-view.component';

const routes: Routes = [
  {
    path: 'view',
    component: LeaguesViewComponent
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
export class LeaguesRoutingModule { }
