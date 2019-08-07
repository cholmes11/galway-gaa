import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesViewComponent } from './leagues-view/leagues-view.component';

@NgModule({
  declarations: [LeaguesViewComponent],
  imports: [
    CommonModule,
    LeaguesRoutingModule
  ]
})
export class LeaguesModule { }
