import {NgModule} from "@angular/core";
import {CourseLayoutComponent} from "./layout/course-layout.component";
import {CourseListComponent} from "./components/course-list/course-list.component";
import {CourseListItemComponent} from "./components/course-list-item/course-list-item.component";
import {CourseAddComponent} from "./components/course-add/course-add.component";
import {CourseDetailComponent} from "./components/course-detail/course-detail.component";
import {CourseRoutingModule} from "./course-routing.module";
import {JsonPipe, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CurrencyPipe} from "./shared/pipe/currency.pipe";
import {MatIconModule} from "@angular/material/icon";
import {CourseService} from "./shared/service/course.service";
import {CourseResolverService} from "./shared/service/course-resolver.service";
import {MatSelectModule} from "@angular/material/select";
@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseListItemComponent,
    CourseAddComponent,
    CourseLayoutComponent,
    CurrencyPipe

  ],
    imports: [
        CourseRoutingModule,
        NgForOf,
        JsonPipe,
        MatCardModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        ReactiveFormsModule,
        NgIf,
        MatProgressSpinnerModule,
        MatIconModule,
        NgTemplateOutlet,
        MatSelectModule,

    ],
  providers: [
    CourseResolverService,
    CourseService
  ],
})
export class CourseModule {
}
