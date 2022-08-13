import { AdminAuthService } from './../admin/service/admin-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminLoginData = new FormGroup({
    username : new FormControl,
    password : new FormControl
  })

  registerForm:any = FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private adminAuth : AdminAuthService) { }
  get f() { return this.registerForm.controls; }
onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }

  //True if all the fields are filled
  else{
    location.replace("/jobs")
  }
}

  ngOnInit(): void {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
    }
    adminLogin(){
      this.adminAuth.adminLogin(this.adminLoginData.value.username, this.adminLoginData.value.password);
    }
  }


