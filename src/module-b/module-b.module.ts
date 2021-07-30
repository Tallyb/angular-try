import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from '../comp-b/comp-b.component'


@NgModule({
  declarations: [CompComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [CompComponent]
})
export class ModuleBModule { }
