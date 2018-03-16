import { Action } from '@ngrx/store';

import { CAR_ACTION, AddCar, DeleteCar, CarsActions } from './cars.actions';

import { Cars, Car } from '../car.model';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function CarsReducer(state = initialState, action: CarsActions) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
          ...state,
          cars: [ ...state.cars, action.payload ]
        };

    case CAR_ACTION.DELETE_CAR:
        return {
          ...state,
          cars: [
            ...state.cars.filter(car => car.id !== action.payload.id )
          ]
        };

    default:
      return state;
  }
}
