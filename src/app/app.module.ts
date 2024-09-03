import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LequelComponent } from './lessons/lequel/lequel/lequel.component';
import { DuAComponent } from './lessons/du-a/du-a.component';

@NgModule({
  declarations: [
    AppComponent,
    LequelComponent,
    DuAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
