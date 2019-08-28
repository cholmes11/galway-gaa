import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../custom-material.module';
import { NotImplementedPageComponent } from './components/not-implemented-page/not-implemented-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [NotImplementedPageComponent],
  exports: [
    CustomMaterialModule,
    FlexLayoutModule
  ],
  imports: [
    CommonModule, CustomMaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
