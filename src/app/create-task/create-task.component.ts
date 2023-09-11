import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  newTask: Task = {
    name: '',
    status: '',
    startDate: '',
    endDate: '',
    id: 0
  };
  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit(): void {}

  submitForm(): void {
    this.taskService.createTask(this.newTask).subscribe({
      next: (response) => {
        console.log('Task created:', response);
        // Handle success if needed
        // Reset the form after successful submission
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating task:', error);
        // Handle error if needed
      }
    });
  }

  resetForm(): void {
    // Clear the form fields after submission
    this.newTask = {
      name: '',
      status: '',
      startDate: '',
      endDate: '',
      id:0
    };
  }
}