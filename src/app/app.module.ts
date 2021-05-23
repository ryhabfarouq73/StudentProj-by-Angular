import { NgModule } from '@angular/core';
import { StudentsService } from './services/students.service';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsPipe } from './pipes/students.pipe';
import { StudentsDirective } from './directives/students.directive';
import { StudentsComponent } from './Components/students/students.component';
import { StudentItemsComponent } from './Components/student-items/student-items.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { AboutComponent } from './Components/about/about.component';
import { ContentusComponent } from './Components/contentus/contentus.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPipe,
    StudentsDirective,
    StudentsComponent,
    StudentItemsComponent,
    StudentDetailsComponent,
    ErrorComponent,
    AboutComponent,
    ContentusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
