import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/cars.actions';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor(private carsService: CarsService, private store: Store<AppState>) { }

  ngOnInit() {
  }

  onDelete() {
    this.carsService.deleteCar(this.car);
  }

  onBuy() {
    this.car.isSold = true;
    this.carsService.updateCar(this.car);
  }
}
