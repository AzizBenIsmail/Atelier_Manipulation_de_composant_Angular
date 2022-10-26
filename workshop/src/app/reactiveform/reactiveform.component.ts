import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  name= new FormControl('',[Validators.required]);
  surname= new FormControl('aziz');

  fg = new FormGroup({
    namefg:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Surnamefg: new FormControl('aziz'),
  })

  fbs=this.fb.group({
    namefg:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Surnamefg: new FormControl('aziz FormBuilder'),
    cours:this.fb.array([
      new FormControl('angular'),
      new FormControl('CSS'),
      new FormControl('react'),

    ]),
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  showFC(){
    console.log(this.name);
    console.log(this.surname)
  }
  showFg(){
    console.log(this.fg.value);
  }
  get namefg(){
    return this.fg.get('namefg')
  }

  get cours(){
    return this.fbs.get('cours') as FormArray
  }
  
 deletecours(i:any){
    return this.cours.removeAt(i)
  }
  
  addcours(){
    return this.cours.push(new FormControl(''))
  }

  showFbs(){
    console.log(this.fbs.value);
  }
}
