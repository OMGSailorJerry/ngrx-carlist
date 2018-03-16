import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CarsFromComponent } from './cars-from/cars-from.component';
import { CarComponent } from './car/car.component';
import { CarsReducer } from './redux/cars.reducer';
import { CarsService } from './cars.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CarsFromComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ carPage: CarsReducer })
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
