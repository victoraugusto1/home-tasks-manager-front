import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api.users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm  } from '@angular/forms';
import { ApiTasksService } from '../api.tasks.service';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.css']
})
export class TasksCreateComponent implements OnInit {
  users: any
  task: any

  update: Boolean = true



  constructor(private userService: ApiUserService, private taskService: ApiTasksService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      console.log(res)
      this.users = res
    })

    const taskId = this.activatedRoute.snapshot.paramMap.get('id')

    if (taskId == '0') {
      this.update = false
    } 
  } 

  updateUser(form: NgForm){
    this.taskService.updateTask(form.value.id, form.value.finishedAt, form.value.cost, form.value.assignee).subscribe(res => {
      console.log(res)
      this.router.navigate(['/tasks'])
    })
  }

  createUser(form: NgForm){
    this.taskService.createTask(form.value.subject, form.value.action, form.value.dueDate, form.value.assignee, form.value.cost).subscribe(res => {
      console.log(res)
      this.router.navigate(['/tasks'])
    })
  }

  save(form: NgForm){
    console.log(form.value)

    if (this.update) {
      this.updateUser(form)
    } else {
      this.createUser(form)
    }
  }

}
