import { Component, OnInit } from '@angular/core';
import { User } from '../form/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private userService:UserService) { }

  formAddForm:FormGroup;
  user: User = new User();

  createFormAddForm(){
    this.formAddForm = this.formBuilder.group({ 
      name:["",Validators.required],
      surName:["",Validators.required],
      age:["",Validators.compose([Validators.min(1),Validators.max(120)])],
    });
  }


  ngOnInit() {
    this.createFormAddForm();
  }

  resetForm(){
    this.formAddForm.reset();
  }

  add(){
    if(this.formAddForm.valid){
      this.user = Object.assign({},this.formAddForm.value);
    }

    this.userService.addUser(this.user).subscribe(data=>{
      alert(data.name + "eklendi...");
      
    });
  }

  

}
