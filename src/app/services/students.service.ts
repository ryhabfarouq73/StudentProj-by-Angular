import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseurl="http://localhost:3000/students";

  constructor(private myStud:HttpClient) { }

  getAllStudents(){
    return this.myStud.get(this.baseurl,{observe:"response"})
  }

  getStudById(id){
    return this.myStud.get(this.baseurl+"/"+id,{observe:"response"})
  }

  AddNewStud(emp){
     this.myStud.post(this.baseurl,emp);
  }
}