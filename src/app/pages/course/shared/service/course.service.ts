import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Course} from "../model/course.model";
import {catchError, delay} from "rxjs/operators";

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
    // return of(this.data).pipe(delay(3000));
  }

  addData(newCourse: Course): Observable<boolean> {
    newCourse.id = this.generateNewID();
    this.data.push(newCourse);
    return of(true);
  }

  updateData(updatedCourse: Course, courseID: number): Observable<boolean> {
    const index = this.data.findIndex(course => course.id === courseID);
    this.data[index] = updatedCourse;
    // return of(true).pipe(delay(3000));
    return of(true);
  }

  generateNewID() {
    return this.data[this.data.length - 1].id + 1;
  }

  getCourseById(id: number): Observable<Course> {
    let course = this.data.find((course) => course.id === id)
    if (course) {
      return of(course);
    }
    throw new Error("Course not found")
  }
}
