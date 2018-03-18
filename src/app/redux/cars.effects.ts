import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CAR_ACTION, AddCar } from './cars.actions';
import { Observable } from 'rxjs/Observable';

import { Cars } from '../car.model';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CarsEffects {

  constructor(private actions$: Actions) {

  }

  @Effect() loadCars = this.actions$.ofType(CAR_ACTION.ADD_CAR)
    .switchMap(
      (action: AddCar) => {
        return action;
      }
    )
    .mergeMap(
      (cars: Cars) => {
        return {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        };
      }
    );
}
