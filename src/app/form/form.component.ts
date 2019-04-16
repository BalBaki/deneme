import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private userService:UserService) { }
  filterText = "";
  users: User[];
  

  ngOnInit() {

    this.userService.getUsers().subscribe(data=>{
      this.users = data;
    })
  }

 

}
