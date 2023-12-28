import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../shared/service/course.service";
import {Course} from "../../shared/model/course.model";

enum CourseLevels {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCE = "Advance"
}

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  courseLevels =["Beginner","Intermediate","Advance"];
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    instructor: new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    level: new FormControl('', Validators.required),
    duration: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
    tags: new FormControl([]),
    description: new FormControl(''),
  });

  constructor(
    private readonly _courseService: CourseService,
    private dialogRef: MatDialogRef<CourseAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {course: Course, action: "add" | "edit"},
  ) {
  }

  ngOnInit(): void {
    if (this.data.action == 'edit') {
      this.fillEditForm();
    }
  }

  fillEditForm() {
    let course = this.data.course
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
      rating: 0
    });
    this._courseService.addData(newCourse).subscribe({
      next: value => {
        this.dialogRef.close({success: value});
      }
    })
  }

  updateCourse() {
    let updatedCourse: Course = new Course({...this.data.course, ...this.form.value})
    this._courseService.updateData(updatedCourse, this.data.course.id).subscribe({
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
}
