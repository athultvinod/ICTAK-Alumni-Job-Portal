import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface admin{
  username : string;
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  adminUsername : string = environment.adminUsername;
  adminPassword : string = environment.adminPassword;
 
  constructor(private http:HttpClient) { }

  // adminlogin
  adminLogin(username : string, password : string){

    if(username === this.adminUsername && password === this.adminPassword){
      console.log('Login is successful');
      location.replace("/admin-dashboard")
      // localStorage.setItem("token", (Math.random()+1).toString(36).substring(7));
    } else{
      alert('Login is failed. Wrong credentials')
      console.log('Login is failed.');  
    
    }

  }
  // check admin is logged in or not
  isAdminLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
