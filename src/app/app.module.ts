import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { InfectionPipe } from './infection.pipe';
import { InfectionDirective } from './infection.directive';

@NgModule({
  declarations: [
    AppComponent,
    InfectionPipe,
    InfectionDirective
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
