import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Form } from '../form/form';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/forms";


  getForms():Observable<Form[]>{
    return this.http.get<Form[]>(this.path);
  }

  getForm(formName):Observable<Form[]>{

    return this.http.get<Form[]>(this.path+"?formName="+formName);
  }

  addForm(form:Form):Observable<Form>{
    const httpOptions= {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Form>(this.path,form,httpOptions);
  }

}
