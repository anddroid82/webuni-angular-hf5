import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { InfectionPipe } from './infection.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfectionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
