import {Component, OnInit} from '@angular/core';
import {Task} from '../../shared/task';
import {tasksArray} from '../../shared/data';
import {TaskService} from '../../task.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
 tasks: Task[];
  constructor(private taskService: TaskService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(data => this.tasks = data) ;
  }



}
