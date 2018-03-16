import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Car } from '../car.model';
import { AppState } from '../redux/app.state';
import { DeleteCar, UpdateCar } from '../redux/cars.actions';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onDelete() {
    this.store.dispatch(new DeleteCar(this.car));
  }

  onBuy() {
    this.store.dispatch(new UpdateCar(this.car));
  }
}
