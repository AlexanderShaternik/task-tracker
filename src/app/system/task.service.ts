import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Task} from './shared/task';

@Injectable()
export class TaskService {
  constructor(public http: HttpClient) {}
  getTasks(): Observable<Task[]> {
  return this.http.get('http://localhost:3000/tasks')
    .map((response: any) => response);
  }

  createNewTask(task): Observable<Task> {
  return this.http.post('http://localhost:3000/tasks', task )
    .map((response: any) => response);
  }
}
