import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {CustomMaterialModule} from '../custom-material.module';
import { NotImplementedPageComponent } from './components/not-implemented-page/not-implemented-page.component';

@NgModule({
  declarations: [ToolbarComponent, NotImplementedPageComponent],
  exports: [
    ToolbarComponent, CustomMaterialModule
  ],
  imports: [
    CommonModule, CustomMaterialModule
  ]
})
export class SharedModule { }
