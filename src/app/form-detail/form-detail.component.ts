import { Component, OnInit } from '@angular/core';
import { Form } from '../form/form';
import { FormService } from '../services/form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

  constructor(
    private formService:FormService,
    private activatedRoute:ActivatedRoute
  ) { }
  forms: Form[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.formService.getForm(params["formName"]).subscribe(data=>{
        this.forms = data;
      });
    })

    
  }

}
