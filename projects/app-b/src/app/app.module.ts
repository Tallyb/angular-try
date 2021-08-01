import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleBModule } from '@src/module-b/module-b.module';
import { ServiceService, SharedModule } from '@src/shared';
import { ServiceBService } from './service-b.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{ provide: ServiceService, useClass: ServiceBService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
