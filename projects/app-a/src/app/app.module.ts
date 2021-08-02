import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceAService } from './service-a.service';
import { SharedModule, ServiceService } from '@src/shared';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: ServiceService, useClass: ServiceAService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
