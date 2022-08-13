import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Faculty } from 'src/app/admin/model/faculty';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-faculty-data',
  templateUrl: './faculty-data.component.html',
  styleUrls: ['./faculty-data.component.css']
})
export class FacultyDataComponent implements OnInit {

  facultyDetailsForm = new FormGroup({
    _id : new FormControl(),
    faculty_number : new FormControl(),
    faculty_name : new FormControl(),
    department : new FormControl(),
    email : new FormControl(),
    mobile : new FormControl(),
    birth_date : new FormControl(),
    joining_year: new FormControl(),
    password: new FormControl()
  })

  facultyObj : Faculty = {
    _id : '',
    faculty_number : 0,
    faculty_name : '',
    department : '',
    email : '',
    password:'',
    joining_year: 0,
    birth_date: '' ,
    mobile: 0



  }

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.facultyDetailsForm = this.fb.group({
      _id : ['',[Validators.required]],
      faculty_number : ['',[Validators.required]],
      faculty_name : ['',[Validators.required]],
      department : ['',[Validators.required]],
      email : ['',[Validators.required]],
      mobile : ['',[Validators.required]],
      birth_date : ['',[Validators.required]],
      joining_year: ['',[Validators.required]],
      password: ['',[Validators.required]]

    })
  }

  addNewFaculty(){
      console.log(this.facultyDetailsForm.value);
  }

}
