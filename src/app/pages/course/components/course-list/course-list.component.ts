import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../shared/service/course.service";
import {Course} from "../../shared/model/course.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  coursesList: Course[] = []

  constructor(private readonly _courseService: CourseService) {
  }

  ngOnInit() {
    this.getCourseList()
  }

  getCourseList() {
    this._courseService.getCourses().subscribe((data) => {
      this.coursesList = data
    })
  }

  onEvent(event: boolean): void {
    if (event) this.getCourseList()
  }
}
