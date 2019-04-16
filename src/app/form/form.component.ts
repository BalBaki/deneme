import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder,private userService:UserService) {
  
   }
  filterText = "";  
  users: User[];
  formAddForm:FormGroup;
  user: User = new User();
  myDate = new Date();
 

  createFormAddForm(){
    this.formAddForm = this.formBuilder.group({ 
      name:["",Validators.required],
      surName:["",Validators.required],
      age:["",Validators.compose([Validators.min(1),Validators.max(120)])],
      createdDate:["",] 
    });
  }

  ngOnInit() {
  
    console.log(this.myDate);
    this.createFormAddForm();
    this.userService.getUsers().subscribe(data=>{
      this.users = data;
    })
  }

  resetForm(){
    this.formAddForm.reset();
  }

  add(){
    if(this.formAddForm.valid){
      
     
      console.log("keke"+this.user.createdDate)
      this.user = Object.assign({},this.formAddForm.value);
    }

    this.userService.addUser(this.user).subscribe(data=>{

      this.ngOnInit();
    });
  }

 

}
