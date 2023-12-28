import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../shared/service/course.service";
import {Course} from "../../shared/model/course.model";
import {MatChipInputEvent} from "@angular/material/chips";
import {ENTER} from "@angular/cdk/keycodes";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy {
  courseLevels = ["Beginner", "Intermediate", "Advance"];
  separatorKeysCodes = [ENTER] as const;
  private _unsubscribe = new Subject();

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    instructor: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    level: new FormControl('', Validators.required),
    duration: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl(''),
  });
  courseTags: string[] = [];

  constructor(
    private readonly _courseService: CourseService,
    private dialogRef: MatDialogRef<CourseAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { course: Course, action: "add" | "edit" },
  ) {
  }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      this.fillEditForm();
    }
  }

  fillEditForm() {
    let course = this.data.course
    this.courseTags = course.tags.map((tag) => tag.name);
    this.form.patchValue({
      title: course.title,
      instructor: course.instructor,
      level: course.level,
      duration: course.duration,
      price: course.price,
      description: course.description
    });
  }

  onSubmit() {
    if (this.data.action == 'add') {
      this.addCourse();
    } else {
      this.updateCourse()
    }
  }

  addCourse() {
    let newCourse = new Course({
      ...this.form.value,
      num_students: 0,
      rating: 0,
      tags: this.courseTags
    });
    this._courseService.addData(newCourse).pipe(takeUntil(this._unsubscribe)).subscribe({
      next: value => {
        this.dialogRef.close({success: value});
      }
    })
  }

  updateCourse() {
    let updatedCourse: Course = new Course({
      ...this.data.course,
      ...this.form.value,
      tags: this.courseTags.map((tag) => ({name: tag, description: ""}))
    })
    this._courseService.updateData(updatedCourse, this.data.course.id).pipe(takeUntil(this._unsubscribe)).subscribe({
      next: value => {
        this.dialogRef.close({success: value});
      }
    })
  }

  fieldIsNotValid(formControlName: string, validations: string | string[]) {
    if (typeof validations == 'string') validations = [validations];
    for (let v of validations) {
      if (this.form.contains(formControlName) && this.form.get(formControlName)?.hasError(v)) {
        return true;
      }
    }
    return false;
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.courseTags.push(value);
    }
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.courseTags.indexOf(tag);
    if (index >= 0) {
      this.courseTags.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
