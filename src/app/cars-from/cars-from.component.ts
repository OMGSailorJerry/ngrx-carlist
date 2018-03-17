import { Component } from '@angular/core';

import { Car } from '../car.model';

import * as moment from 'moment';
import { AppState } from '../redux/app.state';
import { AddCar } from '../redux/cars.actions';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-cars-from',
  templateUrl: './cars-from.component.html',
  styleUrls: ['./cars-from.component.css']
})
export class CarsFromComponent {
  carName = '';
  carModel = '';

  constructor(private carsService: CarsService) { }

  onAdd() {
    if (this.carModel === '' || this.carName === '') {
      return;
    }

    const date = moment().format('DD.MM.YY');
    const car = new Car( this.carName, date, this.carModel );

    this.carsService.addCar(car);

    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    this.carsService.loadCars();
  }
}
