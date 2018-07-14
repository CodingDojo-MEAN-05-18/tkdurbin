import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { of } from 'rxjs';


// import { RESTAURANTS } from '../data/restaurantdata';
import { Restaurant } from '../restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  // private base = 'mockapi';
  private base = '/api/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.base);
    // return of(RESTAURANTS);
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.base}/${id}`);
  }

  createRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.base, restaurant);
  }
  deleteRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.delete<Restaurant>(`${this.base}/${restaurant._id}`);
  }
}
