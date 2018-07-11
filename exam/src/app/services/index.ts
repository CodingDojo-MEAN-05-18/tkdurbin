import { RestaurantService } from './restaurant.service';
import { AuthService } from './auth.service';

export const services: any[] = [AuthService, RestaurantService];

export * from './auth.service';

export * from './restaurant.service';

