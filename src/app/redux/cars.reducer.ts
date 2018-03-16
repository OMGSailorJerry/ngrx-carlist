import { Action } from '@ngrx/store';

import { CAR_ACTION, AddCar, DeleteCar, CarsActions } from './cars.actions';

import { Cars, Car } from '../car.model';

const initialState = {
  cars: []
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
    case CAR_ACTION.UPDATE_CAR:
        const index = state.cars.findIndex(car => car.id === action.payload.id);
        state.cars[index].isSold = true;

        return {
          ...state,
          cars: [...state.cars]
        };

    case CAR_ACTION.LOAD_CARS:
        return {
          ...state,
          cars: [...action.payload]
        };

    default:
      return state;
  }
}
