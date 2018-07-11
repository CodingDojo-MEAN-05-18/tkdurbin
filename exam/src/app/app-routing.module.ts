import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { resolveNgModuleDep } from '@angular/core/src/view/ng_module';
import * as fromRestaurants from './restaurants';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: fromRestaurants.RestaurantlistComponent ,
    // redirectTo: 'restaurants',
    // pathMatch: 'full',
  },
  {
    path: 'restaurants',
    children: [
      {
        path: 'new',
        component: fromRestaurants.RestaurantnewComponent,
        // canActivate: [fromGuards.AuthGuard],
      },
      {
        path: 'detail:id',
        component: fromRestaurants.RestaurantdetailComponent,
      },
    ],
  },
  {
    path: 'restaurants',
    children: [
      {
        path: 'review:id',
        component: fromRestaurants.RestaurantsreviewComponent,
      },
      {
        path: 'reviewnew:id',
        component: fromRestaurants.RestaurantsreviewnewComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
