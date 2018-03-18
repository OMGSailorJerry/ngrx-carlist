import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CarsFromComponent } from './cars-from/cars-from.component';
import { CarComponent } from './car/car.component';
import { CarsReducer } from './redux/cars.reducer';
import { CarsService } from './cars.service';
import { CarsEffects } from './redux/cars.effects';
import { CarsListComponent } from './cars-list/cars-list.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CarsFromComponent,
    CarComponent,
    CarsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ carPage: CarsReducer }),
    EffectsModule.forRoot([CarsEffects]),
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'list', component: CarsListComponent }
    ]),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
