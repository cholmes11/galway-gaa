import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaguesRoutingModule } from './leagues-routing.module';
import { LeaguesViewComponent } from './leagues-view/leagues-view.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [LeaguesViewComponent],
  imports: [
    CommonModule,
    LeaguesRoutingModule,
    SharedModule
  ]
})
export class LeaguesModule { }
