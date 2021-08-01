import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent} from './shared.component'
import { Routes, RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { ServiceService } from './shared.service';
const routes: Routes = [
  {
    path: '',
    component: SharedComponent
  }
];
// here I need to inject a base module that will contain app-comp but based on the compiled app. 
@NgModule({
  declarations: [ SharedComponent ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [],
  exports: [SharedComponent]
})
export class SharedModule { }
