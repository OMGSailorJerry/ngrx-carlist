import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Car } from '../car.model';

import * as moment from 'moment';
import { AppState } from '../redux/app.state';
import { AddCar } from '../redux/cars.actions';


@Component({
  selector: 'app-cars-from',
  templateUrl: './cars-from.component.html',
  styleUrls: ['./cars-from.component.css']
})
export class CarsFromComponent {
  private id = 2;
  carName = '';
  carModel = '';

  constructor(private store: Store<AppState>) { }

  onAdd() {
    if (this.carModel === '' || this.carName === '') {
      return;
    }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      this.carModel,
      moment().format('DD.MM.YY'),
      false,
      this.id,

    );

    // this.addCar.emit(car);
    this.store.dispatch(new AddCar(car));

    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    // todo
  }
}
