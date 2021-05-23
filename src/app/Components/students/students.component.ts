import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studds;
  rev;

  constructor(private myserv:StudentsService) { 

     this.rev = this.myserv.getAllStudents().subscribe(
      (res)=>{this.studds = res.body},
      (err)=>{console.log(err)}
    );
  }

  ngOnInit(): void {
  }

}
