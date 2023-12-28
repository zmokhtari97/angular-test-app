import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Breadcrumb} from "../model/Breadcrumb";

@Injectable({
  providedIn: "root"
})
export class BreadcrumbService {
  private routes: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<Breadcrumb[]>([]);

  setRoute(routes: Breadcrumb[]) {
    this.routes.next(routes)
  }

  addRoute(route: Breadcrumb) {
    let routes = [...this.routes.getValue()];
    routes.push(route);
    this.routes.next(routes);
  }

  getRoute() {
    return this.routes.asObservable();
  }

  clear() {
    this.routes.next([]);
  }
}
