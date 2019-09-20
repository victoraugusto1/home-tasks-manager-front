import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api.users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any
  
  constructor(private service: ApiUserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(res => {
      console.log(res)
      this.users = res
    })
  }
}
