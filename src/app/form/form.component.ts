import { Component, OnInit } from '@angular/core';
import { Form } from './form';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[DatePipe]
})

export class FormComponent implements OnInit {
  
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    public datepipe: DatePipe,
    ) {
  
   }
  filterText = "";  
  forms: Form[];
  formAddForm:FormGroup;
  form: Form = new Form();
  myDate = new Date();
  formattedDate =this.datepipe.transform(this.myDate, 'yyyy-MM-dd');

  createFormAddForm(){
    this.formAddForm = this.formBuilder.group({ 
      formName:["",Validators.required],
      description:["",Validators.required],
      createdDate:[""+this.formattedDate,] ,
      fields:this.formBuilder.group({
        name:["",Validators.required],
        surName:["",Validators.required],
        age:["",Validators.compose([Validators.min(1),Validators.max(120)])]
      }
      )
    });
  }

  ngOnInit() {
  

    this.createFormAddForm();
    this.userService.getUsers().subscribe(data=>{
      this.forms = data;
    });
  }

  resetForm(){
    this.formAddForm.reset();
  }

  add(){
    if(this.formAddForm.valid){
      
     
   
      this.form = Object.assign({},this.formAddForm.value);
    }

    this.userService.addUser(this.form).subscribe(data=>{

      this.ngOnInit();
    });
  }

 

}
