import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  faculty : boolean = false;
  employer : boolean = false;
  alumni : boolean = false;
  postjob : boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.showFacultyData();
    // this.showEmployerData();
    // this.showAlumniData();
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
