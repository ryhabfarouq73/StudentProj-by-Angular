import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id;
  name;
  address;
  studd;

  constructor(private mylink:ActivatedRoute , private mystud:StudentsService) {

    this.id = mylink.snapshot.params.id;
    mystud.getStudById(this.id).subscribe(

      (res)=>{this.studd = res.body},
      (err)=>{console.log(err)}
    )

   }

  ngOnInit(): void {
  }

}
