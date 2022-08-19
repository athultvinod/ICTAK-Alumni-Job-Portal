import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SigninComponent } from './component/signin/signin.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { FacultyDataComponent } from './component/admin-dashboard/faculty-data/faculty-data.component';
import { EmployerDataComponent } from './component/admin-dashboard/employer-data/employer-data.component';
import { AlumniDataComponent } from './component/admin-dashboard/alumni-data/alumni-data.component';




@NgModule({
  declarations: [
    AdminComponent,
    SigninComponent,
    AdminDashboardComponent,
    FacultyDataComponent,
    EmployerDataComponent,
    AlumniDataComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
