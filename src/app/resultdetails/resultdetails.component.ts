import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultdetails',
  templateUrl: './resultdetails.component.html',
  styleUrls: ['./resultdetails.component.css']
})
export class ResultdetailsComponent implements OnInit {

  students:any[]=[
    {id:1,erno:"20SOECE19019",name:"Tejas Patadiya",profile:"../assets/images/1.jpg"},
    {id:2,erno:"20SOECE19011",name:"ABC Patadiya",profile:"../assets/images/1.jpg"},
    {id:3,erno:"20SOECE19012",name:"DEF Patadiya",profile:"../assets/images/1.jpg"},
    {id:4,erno:"20SOECE19013",name:"GHI Patadiya",profile:"../assets/images/1.jpg"},
    {id:5,erno:"20SOECE19014",name:"JKL Patadiya",profile:"../assets/images/1.jpg"},
    {id:6,erno:"20SOECE19015",name:"MNO Patadiya",profile:"../assets/images/1.jpg"},
    {id:7,erno:"20SOECE19016",name:"PQR Patadiya",profile:"../assets/images/1.jpg"},
    {id:8,erno:"20SOECE19017",name:"Tejas Patadiya",profile:"../assets/images/1.jpg"},
  ]


  constructor(private _activatedRoute:ActivatedRoute) { }

  student:any=null;

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe(param=>{
        
      this.student=this.students[param['id']]
      
    })
  }

}
