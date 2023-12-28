import {NgModule} from "@angular/core";
import {RatingComponent} from "./components/rating/rating.component";
import {MatIconModule} from "@angular/material/icon";
import { WishListComponent } from './components/wish-list/wish-list.component';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe} from "./pipe/currency.pipe";
import {CommonModule} from "@angular/common";
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    RatingComponent,
    WishListComponent,
    CurrencyPipe,
    BreadCrumbComponent
  ],
  exports: [
    RatingComponent,
    WishListComponent,
    CurrencyPipe,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ]
})
export class SharedModule {}
