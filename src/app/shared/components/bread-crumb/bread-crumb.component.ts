import { Component } from '@angular/core';
import {BreadcrumbService} from "../../services/breadcrumb.service";

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent {
  constructor(public breadcrumbService: BreadcrumbService) {
  }
}
