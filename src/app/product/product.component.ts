import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:any[]=[
    {id:1,name:"Shoes",price:90,display:"../assets/images/2.png"},
    {id:2,name:"Shirts",price:90,display:"../assets/images/2.png"},
    {id:3,name:"Socks",price:90,display:"../assets/images/2.png"},
    {id:4,name:"Tee",price:90,display:"../assets/images/2.png"},
    {id:5,name:"Bag",price:90,display:"../assets/images/2.png"},
    {id:6,name:"Shoes",price:90,display:"../assets/images/2.png"},
    {id:7,name:"Shoes",price:90,display:"../assets/images/2.png"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
