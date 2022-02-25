import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product:any;
  products:any[]=[
    {id:1,name:"Shoes",price:90,display:"../assets/images/2.png"},
    {id:2,name:"Shirts",price:90,display:"../assets/images/2.png"},
    {id:3,name:"Socks",price:90,display:"../assets/images/2.png"},
    {id:4,name:"Tee",price:90,display:"../assets/images/2.png"},
    {id:5,name:"Bag",price:90,display:"../assets/images/2.png"},
    {id:6,name:"Shoes",price:90,display:"../assets/images/2.png"},
    {id:7,name:"Shoes",price:90,display:"../assets/images/2.png"},
  ]
  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data=>{
     this.product = this.products[data['id']]
    })

  }

}
