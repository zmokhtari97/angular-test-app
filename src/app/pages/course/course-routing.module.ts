import {CourseLayoutComponent} from "./layout/course-layout.component";
import {RouterModule, Routes} from "@angular/router";
import {CourseListComponent} from "./components/course-list/course-list.component";
import {CourseAddComponent} from "./components/course-add/course-add.component";
import {CourseDetailComponent} from "./components/course-detail/course-detail.component";
import {NgModule} from "@angular/core";
import {CourseResolverService} from "./shared/service/course-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: CourseLayoutComponent,
    resolve: { courses: CourseResolverService },
    children: [
      {
        path: '',
        component: CourseListComponent,
      },
      {
        path: 'list',
        component: CourseListComponent,
      },
      {
        path: 'add',
        component: CourseAddComponent,
      }, {
        path: 'detail/:id',
        component: CourseDetailComponent,
      },]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {
}
