import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Car } from '../car.model';

import * as moment from 'moment';


@Component({
  selector: 'app-cars-from',
  templateUrl: './cars-from.component.html',
  styleUrls: ['./cars-from.component.css']
})
export class CarsFromComponent implements OnInit {
  private id = 2;
  carName = '';
  carModel = '';

  @Output() addCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

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

    this.addCar.emit(car);

    this.carModel = '';
    this.carName = '';
  }

  onLoad() {
    // todo
  }
}
