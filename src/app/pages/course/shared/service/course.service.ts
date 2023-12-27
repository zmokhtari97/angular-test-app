import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Course} from "../model/course.model";
import {catchError} from "rxjs/operators";

@Injectable()
export class CourseService {
  private apiUrl = 'assets/db.json';
  private data: Course[] = [];

  constructor(private http: HttpClient) {
  }

  fetchData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.get<any>(this.apiUrl).subscribe(data => {
        this.data = data.courses;
        resolve(true);
      });
    })
  }

  getCourses(): Observable<any> {
    return of(this.data);
  }

  addData(newCourse: Course) {
    this.data.push(newCourse);
  }

  editData(updatedCourse: any, courseID: number): Observable<boolean> {
    const index = this.data.findIndex(course => course.id === courseID);
    if (index != -1) {
      this.data[index] = updatedCourse;
      return of(true);
    }
    return of(true);
  }

  getCourseById(id: number): Observable<Course> {
    let course = this.data.find((course) => course.id === id)
    if (course) {
      return of(course);
    }
    throw new Error("Course not found")
  }
}
