import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-list-component',
  templateUrl: './invoice-list-component.component.html',
  styleUrls: ['./invoice-list-component.component.css']
})
export class InvoiceListComponentComponent implements OnInit {

  name='';
  constructor(private Activatedroute : ActivatedRoute) { }
  ngOnInit(): void {
    
    console.log(this.Activatedroute.snapshot.paramMap.get("id"),this.Activatedroute.snapshot.paramMap.get("a"),this.Activatedroute.snapshot.paramMap.get("b"))
    
    //this.name=this.Activatedroute.snapshot.queryParams['name'];

    this.Activatedroute.paramMap.subscribe(params => {
      console.log(params.get('id'),params.get('a'),params.get('b'));
      });

      this.Activatedroute.params.subscribe(params => {
        console.log(params['id'],params['a'],params['b']);
        });
  
        this.Activatedroute.paramMap.subscribe(params => {
          console.log(params);
          });

      }


}
