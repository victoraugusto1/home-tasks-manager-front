import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'https://5439655e-dc20-4ce9-ae15-5438069ac50c.mock.pstmn.io/'
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
    return this.http.get(endpoint + 'users', httpOptions)
  }
}
