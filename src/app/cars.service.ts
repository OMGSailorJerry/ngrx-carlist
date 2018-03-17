import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { LoadCars, AddCar } from './redux/cars.actions';
import { AppState } from './redux/app.state';
import { Car } from './car.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarsService {
  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  loadCars(): void {
    this.http.get(CarsService.BASE_URL + 'cars')
      .subscribe((cars: Car[]) => {
          this.store.dispatch(new LoadCars(cars));
      });
  }

  addCar(car: Car): void {
    this.http.post(CarsService.BASE_URL + 'cars', car)
      .subscribe((resp: Car) => {
        this.store.dispatch(new AddCar(resp));
      });
  }
}
