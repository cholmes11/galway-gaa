import { NgModule } from '@angular/core';
import {MatButtonModule, MatMenuModule, MatSidenavModule, MatTabsModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatTabsModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatToolbarModule],
  exports: [MatTabsModule, MatMenuModule, MatSidenavModule, MatButtonModule, MatToolbarModule]
})
export class CustomMaterialModule { }
