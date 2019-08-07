import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsViewComponent} from './results-view/results-view.component';

const routes: Routes = [
  {
    path: 'view',
    component: ResultsViewComponent
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
export class ResultsRoutingModule { }
