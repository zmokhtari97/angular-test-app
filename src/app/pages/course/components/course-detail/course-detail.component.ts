import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../shared/service/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
  constructor(private readonly _courseService: CourseService,
              private readonly _activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    let courseID= this._activatedRoute.snapshot.params['id']
    this._courseService.getCourseById(courseID).subscribe((courseDetail)=>{
      console.log(courseDetail)
      console.log(courseDetail)
    })
  }

}
