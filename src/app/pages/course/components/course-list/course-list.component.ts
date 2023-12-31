import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from "../../shared/service/course.service";
import {Course} from "../../shared/model/course.model";
import {takeUntil} from "rxjs/operators";
import {CourseAddComponent} from "../course-add/course-add.component";
import {MatDialog} from "@angular/material/dialog";
import {BreadcrumbService} from "../../../../shared/services/breadcrumb.service";
import {Breadcrumb} from "../../../../shared/model/Breadcrumb";
import {Subject} from "rxjs";

const BreadCrumbAddress: Breadcrumb[] = [{title: "home", route: "/course/list"}]

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  coursesList: Course[] = [];
  private _unsubscribe = new Subject();

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _courseService: CourseService,
    private readonly _breadcrumbService: BreadcrumbService,
  ) {
    this._breadcrumbService.setRoute(BreadCrumbAddress)
  }

  ngOnInit() {
    this.getCourseList()
  }

  getCourseList() {
    this._courseService.getCourses()
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((data) => {
        this.coursesList = data
      })
  }

  onEvent(event: boolean): void {
    if (event) this.getCourseList()
  }

  addNewCourse() {
    let dialogRef = this._dialog.open(CourseAddComponent, {
      width: '70%',
      data: {
        action: 'add'
      },
    })
    dialogRef.afterClosed().subscribe(({success}) => {
      if (success) this.getCourseList();
      else {
        //notification
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
