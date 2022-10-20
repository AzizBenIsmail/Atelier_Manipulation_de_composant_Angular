import { Component, OnInit } from '@angular/core';
import { Us } from '../model/Us';
@Component({
  selector: 'app-workshop7',
  templateUrl: './workshop7.component.html',
  styleUrls: ['./workshop7.component.css']
})
export class Workshop7Component implements OnInit {
  p= new Us();
  constructor() { }

  ngOnInit(): void {
  }

  
}
