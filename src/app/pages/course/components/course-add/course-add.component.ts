import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../shared/service/course.service";

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
    duration: new FormControl(null, Validators.required),
    price: new FormControl('', Validators.required),
    tags: new FormControl([]),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private readonly _courseService: CourseService,
    private dialogRef: MatDialogRef<CourseAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.form.patchValue({
      title: this.data.course.title,
      description: this.data.course.description,
      instructor: this.data.course.instructor,
      level: this.data.course.level,
      price: this.data.course.price
    });
  }

  onSubmit() {
    this._courseService.editData(this.form.value, this.data.data.id).subscribe({
      next: value => {
        this.dialogRef.close({success: value});
      }
    })
  }

  fieldIsValid(formControlName: string, validations: string | string[]) {
    if (typeof validations == 'string') {
      validations = [validations];
    }
    for (let v of validations) {
      if (this.form.contains(formControlName) && this.form.get(formControlName)?.hasError(v)) {
        return false
      }
    }
    return true;
  }
}
