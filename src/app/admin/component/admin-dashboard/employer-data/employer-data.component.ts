import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-data',
  templateUrl: './employer-data.component.html',
  styleUrls: ['./employer-data.component.css']
})
export class EmployerDataComponent implements OnInit {
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
  showViewJobs(){
    this.setoff();
    this.postjob = true;
    this.router.navigate(['/joblist2']);
  }
  showPostJob(){
    this.setoff();
    this.postjob = true;
    this.router.navigate(['/joblist']);
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
