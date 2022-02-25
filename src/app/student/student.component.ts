import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  names = ['atik','raj','priya']

  visible = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  show(name:any){
    console.log(name.value)
  }
  
  

}
