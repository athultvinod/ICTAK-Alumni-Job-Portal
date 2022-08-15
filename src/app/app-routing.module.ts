import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './admin/component/admin-dashboard/admin-dashboard.component';
import { SigninComponent } from './admin/component/signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AlumniComponent } from './alumni/alumni.component';
import { EmployerComponent } from './employer/employer.component';
import { FacultyComponent } from './faculty/faculty.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {SignupComponent} from'./signup/signup.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobListComponent } from './job-list/job-list.component';
import { Jobs2Component } from './jobs2/jobs2.component';
import { Joblist2Component } from './joblist2/joblist2.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'jobs',component:JobsComponent},
  {path:'submit',component:JobsComponent},
  {path: 'joblist', component:JobListComponent},
  {path: 'jobs2', component:Jobs2Component},
  {path:'joblist2',component:Joblist2Component},
  {path: 'siginin', component:SigninComponent},
  {path: 'admin', component:AdminComponent, children:[
    {path: 'siginin', component:SigninComponent}
  ]},
  {path: 'admin-dashboard', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,FormsModule,ReactiveFormsModule],

  exports: [RouterModule]

})
export class AppRoutingModule { }
