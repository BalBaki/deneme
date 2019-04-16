import { Component, OnInit } from '@angular/core';
import { Form } from './form';
import { FormService } from '../services/form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { AlertifyService } from '../services/alertify.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[DatePipe]
})

export class FormComponent implements OnInit {
  
  constructor(
    private formBuilder:FormBuilder,
    private formService:FormService,
    public datepipe: DatePipe,
    private alertifyService:AlertifyService
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
    this.formService.getForms().subscribe(data=>{
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
    this.formService.addForm(this.form).subscribe(data=>{
      this.alertifyService.success(this.form.formName+" adlı form basariyla eklendi.");
      this.ngOnInit();
    });
  }

 

}
