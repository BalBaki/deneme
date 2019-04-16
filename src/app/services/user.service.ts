import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../form/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/users";


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.path);
  }

  getUser(formName):Observable<User[]>{

    return this.http.get<User[]>(this.path+"?formName="+formName  );
  }

  addUser(user:User):Observable<User>{
    const httpOptions= {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<User>(this.path,user,httpOptions);
  }

}
