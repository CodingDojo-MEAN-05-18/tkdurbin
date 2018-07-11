import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';


import { RestaurantService } from '../../services';
import { Restaurant } from '../../restaurant';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-restaurantnew',
  templateUrl: './restaurantnew.component.html',
  styleUrls: ['./restaurantnew.component.css']
})
export class RestaurantnewComponent implements OnInit, OnDestroy {
  restaurant = new Restaurant();
  sub: Subscription;

  @Output() newRestaurant = new EventEmitter<Restaurant>();

  constructor(
    private readonly restaurantService: RestaurantService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.restaurant);

    this.sub = this.restaurantService.createRestaurant(this.restaurant).subscribe(restaurant => {
      this.router.navigateByUrl('/');
        // this.newRestaurant.emit(this.restaurant);
        // this.restaurant = new Restaurant();
        // form.reset();
    // this.restaurants.push(this.restaurant);

    });
    // console.log('restaurants', this.restaurants);
  }

}
