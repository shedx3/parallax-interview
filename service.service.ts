import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  api: string = 'https://jsonplaceholder.typicode.com/todos/';
  constructor(public https: HttpClient) {}

  getTodoList():  Observable<any[]> {
     return this.https.get<any []> (`${this.api}`)
  }
}
