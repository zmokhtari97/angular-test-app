import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import {CourseService} from "./course.service";

@Injectable()
export class CourseResolverService implements Resolve<any> {
  constructor(private _courseService: CourseService) {}
  resolve(route: ActivatedRouteSnapshot): Promise<boolean> {
    return this._courseService.fetchData();
  }
}
