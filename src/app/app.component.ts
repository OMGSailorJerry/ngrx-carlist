import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Cars, Car } from './car.model';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cars: Car[] = [ ];

  public carState: Observable<Cars>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select('carPage').subscribe(
    //   ({cars}) => {
    //     this.cars = cars;
    //   }
    // );
    this.carState = this.store.select('carPage');
  }



  onDelete(car: Car) {
    this.cars = this.cars.filter(el => el.id !== car.id);
  }
}
