import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../../shared/model/course.model";
import {CourseAddComponent} from "../course-add/course-add.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent {
  @Input() course: Course = new Course();
  @Output() event = new EventEmitter<boolean>();

  constructor(private readonly _dialog: MatDialog) {}

  editCourse() {
   let dialogRef= this._dialog.open(CourseAddComponent, {
      width: '70%',
      data: {
        action: 'edit',
        course: this.course
      },
    })
    dialogRef.afterClosed().subscribe(({success}) => {
      if (success) this.event.emit(success);
      else {
      //  notification
      }
    });
  }

}
