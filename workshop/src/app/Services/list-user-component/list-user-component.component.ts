import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css']
})
export class ListUserComponentComponent implements OnInit {
  users : any;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    console.log(this.userService.fetchNbInList(this.userService.list,'firstName','Mila'))
    
    this.users = this.userService.getAllUsers();
  }


}
