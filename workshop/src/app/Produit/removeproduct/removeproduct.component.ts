import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css'],
})
export class RemoveproductComponent implements OnInit {
  id: any;
  constructor(private ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    // console.log(this.id);
    this.ac.params.subscribe((d) => console.log(d));
  }
}
