import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotImplementedPageComponent} from './shared/components/not-implemented-page/not-implemented-page.component';

const routes: Routes = [
  {
    path: 'leagues',
    loadChildren: () => import('./modules/leagues/leagues.module').then(mod => mod.LeaguesModule)
  }, {
    path: 'fixtures',
    loadChildren: () => import('./modules/fixtures/fixtures.module').then(mod => mod.FixturesModule)
  }, {
    path: 'results',
    loadChildren: () => import('./modules/results/results.module').then(mod => mod.ResultsModule)
  }, {
    path: '',
    redirectTo: 'leagues',
    pathMatch: 'full'
  }, {
    path: '**',
    component: NotImplementedPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
