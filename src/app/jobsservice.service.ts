import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobsserviceService {

  constructor(public http: HttpClient) { }
    getJobs(){
      return this.http.get('http://localhost:3000/jobs')
    }

    addJobs(item:any){

      return this.http.post('http://localhost:3000/insert', { item }).subscribe(data => { console.log(data) });
    
  }
}


