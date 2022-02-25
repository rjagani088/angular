import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = "Sagar"
  
  students = [{name:"sagar",branch:"CE"},{name:"Priya",branch:"Civil"},{name:"Nikhil",branch:"CE"},{name:"Renish",branch:"IT"}]
  
}
