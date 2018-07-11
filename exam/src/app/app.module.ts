import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
// import { RestaurantlistComponent } from './restaurants/restaurantlist/restaurantlist.component';
// import { RestaurantnewComponent } from './restaurants/restaurantnew/restaurantnew.component';
// import { RestaurantdetailComponent } from './restaurants/restaurantdetail/restaurantdetail.component';
// import { RestaurantsreviewnewComponent } from './restaurants/restaurantsreviewnew/restaurantsreviewnew.component';
// import { RestaurantsreviewComponent } from './restaurants/restaurantsreview/restaurantsreview.component';

// import { RestaurantService } from './services/restaurant.service';

import * as fromServices from './services';
import * as fromRestaurants from './restaurants';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromRestaurants.componenets,
    NavComponent,
    NotfoundComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    // RestaurantlistComponent,
    // RestaurantnewComponent,
    // RestaurantdetailComponent,
    // RestaurantsreviewnewComponent,
    // RestaurantsreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
