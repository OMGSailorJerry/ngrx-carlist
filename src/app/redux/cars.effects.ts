import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CAR_ACTION, AddCar } from './cars.actions';

import { CarsService } from '../cars.service';
import { Cars, Car } from '../car.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CarsEffects {

  constructor(private actions$: Actions, private carsService: CarsService) {

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
}
