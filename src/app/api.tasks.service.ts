import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'https://746e0e39-6872-4409-a49d-f7bf39598813.mock.pstmn.io/'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiTasksService {
  constructor(private http: HttpClient) { }

  getTasks(){
    console.log("GETTING TASKS")
    return this.http.get(endpoint + 'tasks', httpOptions)
  }

  getTaskById(id: String){
    console.log("GETTING TAKS BY ID " + id)
    return this.http.get(endpoint + 'tasks/' + id, httpOptions)
  }

  updateTask(id: String, finishedAt: String, cost: String, assignee: String){
    console.log("UPDATING TASK " + id + " |" + name)
    return this.http.put(endpoint + 'task' + id, {
      "id": id,
      "finishedAt": finishedAt,
      "cost": cost,
      "assignee": assignee
    }, httpOptions)
  }

  createTask(subject: String, action: String, dueDate: String, assignee: String, cost: String){
    console.log("CREATING TASK: " + subject)
    return this.http.post(endpoint + 'tasks', {
      "subject": subject,
      "action": action,
      "dueDate": dueDate,
      "assignee": assignee,
      "cost": cost
    }, httpOptions)
  }
}
