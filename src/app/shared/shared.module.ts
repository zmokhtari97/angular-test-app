import {NgModule} from "@angular/core";
import {RatingComponent} from "./components/rating/rating.component";
import {MatIconModule} from "@angular/material/icon";
import {WishListComponent} from './components/wish-list/wish-list.component';
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe} from "./pipe/currency.pipe";
import {CommonModule} from "@angular/common";
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    RatingComponent,
    WishListComponent,
    CurrencyPipe,
    BreadcrumbComponent
  ],
  exports: [
    RatingComponent,
    WishListComponent,
    CurrencyPipe,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
  ]
})
export class SharedModule {
}
