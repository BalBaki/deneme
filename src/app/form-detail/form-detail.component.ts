import { Component, OnInit } from '@angular/core';
import { User } from '../form/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute
  ) { }
  users: User[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.userService.getUser(params["formName"]).subscribe(data=>{
        this.users = data;
      });
    })

    
  }

}
