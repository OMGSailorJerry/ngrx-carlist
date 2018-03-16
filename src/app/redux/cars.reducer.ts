import { Action } from '@ngrx/store';

import { Cars, Car } from '../car.model';

const initialState = {
  cars: [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.08.12', 'A4', false, 2)
  ]
};

export function CarsReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
