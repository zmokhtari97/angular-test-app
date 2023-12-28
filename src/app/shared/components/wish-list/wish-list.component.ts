import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  @Input() type: "small" | "normal" = "small";
  @Input() isActive = false;
}
