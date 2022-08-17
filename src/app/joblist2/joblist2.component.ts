import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { JobModel } from '../jobs2/job.model';
import { JobsserviceService } from '../jobsservice.service';

@Component({
  selector: 'app-joblist2',
  templateUrl: './joblist2.component.html',
  styleUrls: ['./joblist2.component.css']
})
export class Joblist2Component implements OnInit {
  jobItem= new JobModel(0,"","","","","","");

  constructor(public jobService:JobsserviceService, private router:Router) {

   }

  ngOnInit(): void {
  }

  NewJob(){
    this.jobService.addJobs(this.jobItem);
    alert('New Job Added');
    this.router.navigate(['jobs2']);
  }

}
