import { JobModel } from './job-list.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  [x: string]: any;

  formValue !: FormGroup;
  jobModelObj : JobModel = new JobModel();
  jobData !:any;
  showAdd ! : boolean;
  showUpdate ! : boolean;
  constructor(private formbuilder:FormBuilder,
              private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      postName : [''],
      companyName : [''],
      location : [''],
      skills : [''],
      experience : [''],
      lastDate : ['']
    })
    this.getAllJob();
  }
  clickAddJob(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  backToAdmin(){
    this.formValue.reset();
    this['router'].navigate(['/admin-dashboard']);
  }
  postJobDetails(){
    this.jobModelObj.postName = this.formValue.value.postName;
    this.jobModelObj.companyName = this.formValue.value.companyName;
    this.jobModelObj.location = this.formValue.value.location;
    this.jobModelObj.skills = this.formValue.value.skills;
    this.jobModelObj.experience = this.formValue.value.experience;
    this.jobModelObj.lastDate = this.formValue.value.lastDate;

    this.api.postJob(this.jobModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Job Added Succesfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllJob();
    },
    err=>{
      alert("Something Went Wrong");
    })
  }
  getAllJob(){
    this.api.getJob()
    .subscribe(res=>{
      this.jobData= res;

    })
  }
  deleteJob(row: any){
    this.api.deleteJob(row.id)
    .subscribe(res=>{
      alert("Job Deleted")
      this.getAllJob();
    })
  }
  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.jobModelObj.id = row.id;
    this.formValue.controls['postName'].setValue(row.postName);
    this.formValue.controls['companyName'].setValue(row.companyName);
    this.formValue.controls['location'].setValue(row.location);
    this.formValue.controls['skills'].setValue(row.skills);
    this.formValue.controls['experience'].setValue(row.experience);
    this.formValue.controls['lastDate'].setValue(row.lastDate);
  }
  updateJobDetails(){
    this.jobModelObj.postName = this.formValue.value.postName;
    this.jobModelObj.companyName = this.formValue.value.companyName;
    this.jobModelObj.location = this.formValue.value.location;
    this.jobModelObj.skills = this.formValue.value.skills;
    this.jobModelObj.experience = this.formValue.value.experience;
    this.jobModelObj.lastDate = this.formValue.value.lastDate;

    this.api.updateJob(this.jobModelObj,this.jobModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllJob(); 
    })
  }
}
