import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../custom-material.module';
import { NotImplementedPageComponent } from './components/not-implemented-page/not-implemented-page.component';

@NgModule({
  declarations: [NotImplementedPageComponent],
  exports: [
    CustomMaterialModule
  ],
  imports: [
    CommonModule, CustomMaterialModule
  ]
})
export class SharedModule { }
