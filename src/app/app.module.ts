import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CarsFromComponent } from './cars-from/cars-from.component';
import { CarComponent } from './car/car.component';
import { CarsReducer } from './redux/cars.reducer';
import { CarsService } from './cars.service';
import { CarsEffects } from './redux/cars.effects';


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
    StoreModule.forRoot({ carPage: CarsReducer }),
    EffectsModule.forRoot([CarsEffects])
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
