import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TaskService} from '../../../../task.service';
import {Task} from '../../../../shared/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private taskService: TaskService,
              private router: Router
  ) {}
  ngOnInit() {
    this.taskForm = new FormGroup({
      'title': new FormControl('', Validators.required),
      'priority': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)
    });
  }
  submit() {
    const {title, priority, description} = this.taskForm.value;
    const date = new Date().toString();
    const task = new Task(title, description, date, priority);
    console.log(task);
    this.taskService.createNewTask(task)
      .subscribe();
    this.taskForm.reset();
  }
  close() {
  }
}
