import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../shared/service/course.service";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../shared/model/course.model";
import {CourseAddComponent} from "../course-add/course-add.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  constructor(
    private readonly _dialog: MatDialog,
    private readonly _courseService: CourseService,
    private readonly _activatedRoute: ActivatedRoute,
    ) {
  }

  course: Course = new Course()

  ngOnInit() {
    this.getCourseDetail();
  }

  getCourseDetail() {
    let courseID = this._activatedRoute.snapshot.params['id']
    this._courseService.getCourseById(Number(courseID)).subscribe((courseDetail) => {
      this.course=courseDetail
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
