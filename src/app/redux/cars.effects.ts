import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CAR_ACTION, AddCar, PostCar } from './cars.actions';
import { HttpClient } from '@angular/common/http';

import { CarsService } from '../cars.service';
import { Cars, Car } from '../car.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CarsEffects {

  constructor(
    private actions$: Actions,
    private carsService: CarsService,
    private http: HttpClient) {

  }

  @Effect() loadCars = this.actions$.ofType(CAR_ACTION.ADD_CAR)
    .switchMap((action: AddCar) => {
      return this.carsService.preloadCars();
    })
    .mergeMap((cars: Car[]) => {
      return [{
        type: CAR_ACTION.LOAD_CARS,
        payload: cars
      }];
    });

  @Effect() postCar = this.actions$.ofType(CAR_ACTION.POST_CAR)
    .switchMap((action: PostCar) => {
      return this.http.post(CarsService.BASE_URL + 'cars', action.payload);
    })
    .mergeMap((car: Car) => {
      return [{
        type: CAR_ACTION.ADD_CAR,
        payload: car
      }];
    });
}
