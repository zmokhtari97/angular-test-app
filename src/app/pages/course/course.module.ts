import {NgModule} from "@angular/core";
import {CourseLayoutComponent} from "./layout/course-layout.component";
import {CourseListComponent} from "./components/course-list/course-list.component";
import {CourseListItemComponent} from "./components/course-list-item/course-list-item.component";
import {CourseAddComponent} from "./components/course-add/course-add.component";
import {CourseDetailComponent} from "./components/course-detail/course-detail.component";
import {CourseRoutingModule} from "./course-routing.module";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {CourseService} from "./shared/service/course.service";
import {CourseResolverService} from "./shared/service/course-resolver.service";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../../shared/shared.module";
import {MatChipsModule} from "@angular/material/chips";

const MAT_MODULES: any[] = [MatCardModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  SharedModule,
  MatFormFieldModule,
  MatChipsModule,
  MatIconModule
]

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseListItemComponent,
    CourseAddComponent,
    CourseLayoutComponent,

  ],
  imports: [
    CourseRoutingModule,
    CommonModule,
    ...MAT_MODULES

  ],
  providers: [
    CourseResolverService,
    CourseService,
  ],
})
export class CourseModule {
}
