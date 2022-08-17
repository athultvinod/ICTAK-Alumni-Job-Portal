import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Faculty } from 'src/app/admin/model/faculty';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-faculty-data',
  templateUrl: './faculty-data.component.html',
  styleUrls: ['./faculty-data.component.css']
})
export class FacultyDataComponent implements OnInit {

  faculty : boolean = false;
  employer : boolean = false;
  alumni : boolean = false;
  postjob : boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

  setoff(){
    this.postjob = false;
    this.faculty = false;
    this.employer = false;
    this.alumni = false;
    
  }
  showPostJob(){
    this.setoff();
    this.postjob = true;
    this.router.navigate(['/joblist2']);

  }
  showViewJobs(){
    this.setoff();
    this.postjob = true;
    this.router.navigate(['/jobs2']);
  }
  showFacultyData(){
    this.setoff();
    this.faculty = true;
  }

  showEmployerData(){
    this.setoff();
    this.employer = true;
  }

  showAlumniData(){
    this.setoff();
    this.alumni = true;
  }
  signout(){
   localStorage.removeItem("token"); 
    this.router.navigate(['/login']);
  }

}
