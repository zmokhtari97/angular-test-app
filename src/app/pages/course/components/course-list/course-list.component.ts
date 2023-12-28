import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../shared/service/course.service";
import {Course} from "../../shared/model/course.model";
import {finalize} from "rxjs/operators";
import {CourseAddComponent} from "../course-add/course-add.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  coursesList: Course[] = [];
  dataLoading = true;

  constructor(
    private readonly _dialog: MatDialog,
    private readonly _courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.getCourseList()
  }

  getCourseList() {
    this._courseService.getCourses()
      .pipe(finalize(() => this.dataLoading = false))
      .subscribe((data) => {
      this.coursesList = data
    })
  }

  onEvent(event: boolean): void {
    if (event) this.getCourseList()
  }

  addNewCourse() {
    let dialogRef= this._dialog.open(CourseAddComponent, {
      width: '70%',
      data: {
        action: 'add'
      },
    })
    dialogRef.afterClosed().subscribe(({success}) => {
      if (success) this.getCourseList();
      else {
        //  notification
      }
    });
  }
}
