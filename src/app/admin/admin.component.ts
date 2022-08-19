import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder, EmailValidator } from '@angular/forms';
import { AdminAuthService } from './../admin/service/admin-auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

adminLoginData = new FormGroup({
  username : new FormControl,
  password : new FormControl
})
 constructor(private fb : FormBuilder, private adminAuth : AdminAuthService){}


  ngOnInit(): void {
    this.adminLoginData = this.fb.group({
     username : ['',[Validators.email]],
     password : ['', [Validators.minLength(6)]] 
    });
  }
  adminLogin(){
    this.adminAuth.adminLogin(this.adminLoginData.value.username, this.adminLoginData.value.password);
  }
}
