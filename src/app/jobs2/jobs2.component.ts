import { Component, OnInit } from '@angular/core';
import { JobModel } from './job.model';
import { JobsserviceService } from '../jobsservice.service';
@Component({
  selector: 'app-jobs2',
  templateUrl: './jobs2.component.html',
  styleUrls: ['./jobs2.component.css']
})
export class Jobs2Component implements OnInit {

  jobs:JobModel[] | any;

  constructor(public jobService:JobsserviceService ) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data) =>{
      this.jobs = JSON.parse(JSON.stringify(data));
    })
  }

}
