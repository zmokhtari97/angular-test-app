import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Breadcrumb} from "../model/Breadcrumb";

@Injectable({
  providedIn: "root"
})
export class BreadcrumbService {
  private routes: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<Breadcrumb[]>([])

  setAddress(routes: Breadcrumb[]) {
    this.routes.next(routes)
  }

  addAddress(route: Breadcrumb) {
    let routes = this.routes.value;
    routes.push(route);
    this.routes.next(routes);
  }

  getAddress() {
    return this.routes.asObservable();
  }
}
