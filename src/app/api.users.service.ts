import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'http://localhost:8080/'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    console.log("GETTTING USER")
    return this.http.get(endpoint + 'users', httpOptions)
  }

  getUserById(id: String) {
    console.log("GETTTING USER BY ID: " + id)
    return this.http.get(endpoint + 'users/' + id, httpOptions)
  }

  updateUser(id: String, name: String) {
    console.log("UPDATING USER: " + id + " |" + name)
    return this.http.put(endpoint + 'users' + id, {
      "id": id,
      "name": name
    }, httpOptions)
  }

  createUser(name: String) {
    console.log("CREATING USER: " + name)
    return this.http.post(endpoint + 'users', {
      "name": name
    }, httpOptions)
  }
}
