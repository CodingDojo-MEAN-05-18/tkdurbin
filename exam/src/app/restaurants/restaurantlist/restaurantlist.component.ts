import { Component, OnInit, OnDestroy } from '@angular/core';
import { Restaurant } from '../../restaurant';
// import { RESTAURANTS } from '../../data/restaurantdata';
import { RestaurantService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit, OnDestroy {
  restaurants: Array<Restaurant> = [];
  sub: Subscription;
  authed: boolean;
  editRestaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
  ) { }

  ngOnInit() {
    // this.restaurants = this.restaurantService.getRestaurants();
    this.sub = this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;

    });
    // this.auth.authorized$.subscribe(authed => (this.authed = authed));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(restaurant: Restaurant) {
    console.log('edit restaurant', restaurant);

    this.editRestaurant = this.editRestaurant === restaurant ? null : restaurant;
    // turanary(sp.?)

    // if (this.editRestaurant !== restaurant) {
      // this.editRestaurant = restaurant;
    // } else {
      // this.editRestaurant = null;
    // }
  }

  onCreate(restaurant: Restaurant) {
    console.log('creating restaurant', restaurant);
    this.restaurants.push(restaurant);
  }
  onClick(event: Event) {
    event.stopPropagation();

  }
  onDelete(restaurantToDelete: Restaurant) {
    this.restaurantService.deleteRestaurant(restaurantToDelete).subscribe(deletedRestaurant => {
      this.restaurants = this.restaurants.filter(restaurant => restaurant._id !== deletedRestaurant._id);
    });

  }

}
