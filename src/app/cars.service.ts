import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoadCars, AddCar, DeleteCar, UpdateCar, PostCar } from './redux/cars.actions';
import { AppState } from './redux/app.state';
import { Car, Cars } from './car.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarsService {
  static BASE_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  preloadCars(): Observable<Car[]> {
    return this.http.get<Car[]>(CarsService.BASE_URL + 'cars');
  }

  loadCars(): void {
    this.preloadCars()
      .subscribe((cars: Car[]) => {
        this.store.dispatch(new LoadCars(cars));
      });
  }

  addCar(car: Car): void {
    this.store.dispatch(new PostCar(car));
    // this.http.post(CarsService.BASE_URL + 'cars', car)
    //   .subscribe((resp: Car) => {
    //     this.store.dispatch(new AddCar(resp));
    //   });
  }

  deleteCar(car: Car): void {
    this.http.delete(CarsService.BASE_URL + 'cars/' + car.id)
      .subscribe((resp: Car) => {
        this.store.dispatch(new DeleteCar(car));
      });
  }

  updateCar(car: Car): void {
    this.http.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .subscribe((resp: Car) => {
        this.store.dispatch(new UpdateCar(car));
      });
  }
}
