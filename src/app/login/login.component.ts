import { AdminAuthService } from './../admin/service/admin-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder ,EmailValidator} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
    //Form Validables 
registerForm:any = FormGroup;
submitted = false;
constructor( private formBuilder: FormBuilder){}
//Add user form actions
get f() { return this.registerForm.controls; }
=======

  adminLoginData = new FormGroup({
    username : new FormControl,
    password : new FormControl
  })

  registerForm:any = FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private adminAuth : AdminAuthService) { }
  get f() { return this.registerForm.controls; }
>>>>>>> d19fc56fe922a6cbaebcb6661c97a1bab06d4e61
onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
<<<<<<< HEAD
  if(this.submitted)
  {
    location.replace('/jobs');
  }
 
}
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
}

=======
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

>>>>>>> d19fc56fe922a6cbaebcb6661c97a1bab06d4e61

