import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixturesRoutingModule } from './fixtures-routing.module';
import { FixturesViewComponent } from './fixtures-view/fixtures-view.component';

@NgModule({
  declarations: [FixturesViewComponent],
  imports: [
    CommonModule,
    FixturesRoutingModule
  ]
})
export class FixturesModule { }
