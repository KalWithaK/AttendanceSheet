import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
