import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent} from './shared.component'

// here I need to inject a base module that will contain app-comp but based on the compiled app. 
@NgModule({
  declarations: [ SharedComponent ],
  imports: [
    CommonModule,

  ]
})
export class SharedModule { }
