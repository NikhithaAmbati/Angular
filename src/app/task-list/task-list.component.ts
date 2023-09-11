import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editing: boolean = false;
  editingTask: Task | null = null;
  editingTaskStatus: { [taskId: number]: string } = {};

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
    // this.loadTasks(); 
  }
  // loadTasks(): void {
  //   this.taskService.getTasks().subscribe(tasks => {
  //     this.tasks = tasks;
  //   });
  // }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  editTask(task: Task): void {
    this.editing = true;
    this.editingTask = task;
    this.editingTaskStatus[task.id] = task.status;
  }

  updateTask(task: Task): void {
    if (this.editingTask) {
      task.status = this.editingTaskStatus[task.id];
      this.taskService.updateTask(task.id, task).subscribe((updatedTask) => {
        this.getTasks();
        this.editingTask = null;
        this.editing = false;
      });
    }
  }

  cancelEdit(): void {
    this.editingTask = null;
    this.editing = false;
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.getTasks();
    });
  }

}
