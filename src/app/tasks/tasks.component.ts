import { Component, OnInit } from '@angular/core';
import { ApiTasksService } from '../api.tasks.service';
 
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: any

  constructor(private service: ApiTasksService) { }

  ngOnInit() {
    this.service.getTasks().subscribe(res => {
      console.log(res)
      this.tasks = res
    })
  }
}
