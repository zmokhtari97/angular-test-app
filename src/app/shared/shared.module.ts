import {NgModule} from "@angular/core";
import {RatingComponent} from "./components/rating/rating.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [RatingComponent],
  exports: [
    RatingComponent
  ],
  imports: [
    MatIconModule
  ]
})
export class SharedModule {}
