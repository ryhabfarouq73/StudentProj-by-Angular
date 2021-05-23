import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContentusComponent } from './Components/contentus/contentus.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentsComponent } from './Components/students/students.component';

const routes: Routes = [{path:"" , redirectTo:"students",pathMatch:"full"},
{path:"students/:id",component:StudentDetailsComponent},
{path:"students",component:StudentsComponent},
{path:"about",component:AboutComponent},
{path:"contentus",component:ContentusComponent},
{path:"**",component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


