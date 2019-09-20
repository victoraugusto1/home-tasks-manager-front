import { Component, OnInit } from '@angular/core';
import { ApiTasksService } from '../api.tasks.service';
import { ApiUserService } from '../api.users.service';
 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any
  users: any

  constructor(private service: ApiTasksService, private userService: ApiUserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      console.log(res)
      this.users = res

      this.service.getTasks().subscribe(res => {
        console.log(res)
        this.tasks = res
      })
    })
    
  }

  findUser(id) {
    for (let u of this.users) {
      if (u.id == id) return u.name 
    }
  }
}
