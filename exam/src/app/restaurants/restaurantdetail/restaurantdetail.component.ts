import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../../restaurant';

import { switchMap } from 'rxjs/operators';

import { RestaurantService } from '../../services';

@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css']
})
export class RestaurantdetailComponent implements OnInit {
  @Input()
  restaurant: Restaurant;
  errorMessage: string;
  // editRestaurant: Restaurant;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    // const id = params.get('id');

    // this.restaurantService.getRestaurant(id)
    // .subscribe(restaurant => this.restaurant = restaurant);
    // });
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.restaurantService.getRestaurant(id);
      })
    )
      .subscribe(
      restaurant => (this.restaurant = restaurant),
      error => {
        console.log('error', error);
        this.errorMessage = error.error;
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 3000);
        }
    );
  }
}
