import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { EmployerComponent } from './employer/employer.component';
import { AlumniComponent } from './alumni/alumni.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobListComponent } from './job-list/job-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { Jobs2Component } from './jobs2/jobs2.component';
import { Joblist2Component } from './joblist2/joblist2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    FacultyComponent,
    EmployerComponent,
    AlumniComponent,
    AboutusComponent,
    FooterComponent,
    SignupComponent,
    JobsComponent,
    JobListComponent,
    Jobs2Component,
    Joblist2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
