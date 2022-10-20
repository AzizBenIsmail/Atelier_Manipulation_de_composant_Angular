import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  tab:any=[];
  constructor() { }

  ngOnInit(): void {
  } 
  ShowData(f:any){
    //console.log(f.value);
       // console.log(f);
             //console.log(f);
             this.tab.push(f.value)
  }
  remove(i:any){
    
    this.tab.splice(this.tab.indexOf(i),1);
      }}
