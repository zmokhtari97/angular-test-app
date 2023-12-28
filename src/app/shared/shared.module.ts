import {NgModule} from "@angular/core";
import {RatingComponent} from "./components/rating/rating.component";
import {MatIconModule} from "@angular/material/icon";
import { WishListComponent } from './components/wish-list/wish-list.component';
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";

@NgModule({
  declarations: [RatingComponent, WishListComponent],
  exports: [
    RatingComponent,
    WishListComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    NgIf
  ]
})
export class SharedModule {}
