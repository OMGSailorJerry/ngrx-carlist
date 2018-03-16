import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarsFromComponent } from './cars-from/cars-from.component';
import { CarComponent } from './car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsFromComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
