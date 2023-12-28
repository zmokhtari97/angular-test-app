import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from "../../shared/service/course.service";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../shared/model/course.model";
import {CourseAddComponent} from "../course-add/course-add.component";
import {MatDialog} from "@angular/material/dialog";
import {BreadcrumbService} from "../../../../shared/services/breadcrumb.service";
import {Breadcrumb} from "../../../../shared/model/Breadcrumb";

const BreadCrumbAddress : Breadcrumb[] = [{title: "home", route: "/course/list"}]

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: Course = new Course();

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _courseService: CourseService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _breadcrumbService: BreadcrumbService,
    ) {
    this._breadcrumbService.setRoute(BreadCrumbAddress)
  }

  ngOnInit() {
    this.getCourseDetail();
  }

  getCourseDetail() {
    let courseID = this._activatedRoute.snapshot.params['id'];
    this._courseService.getCourseById(Number(courseID)).subscribe((courseDetail) => {
      this.course=courseDetail;
      this._breadcrumbService.addRoute({title: this.course.title, route: "/course/detail/" + courseID})
    })
  }

  editCourse() {
    let dialogRef= this._dialog.open(CourseAddComponent, {
      width: '70%',
      data: {
        action: 'edit',
        course: this.course
      },
    })
    dialogRef.afterClosed().subscribe(({success}) => {
      if (success) this.getCourseDetail();
      else {
        //  notification
      }
    });
  }
}
