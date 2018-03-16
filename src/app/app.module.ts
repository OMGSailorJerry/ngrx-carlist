import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CarsFromComponent } from './cars-from/cars-from.component';
import { CarComponent } from './car/car.component';
import { CarsReducer } from './redux/cars.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CarsFromComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ carPage: CarsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
