import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Task } from './models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8082/api/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }
  getAllTasks(): Observable<any[]>  {
    return this.http.get<any[]> (this.baseUrl);
  }

  getTaskById(id: number): Observable<any>  {
    return this.http.get<any> (`${this.baseUrl}/${id}`);
  }

  createTask(task: any): Observable<any>  {
    return this.http.post<any>(this.baseUrl, task);
  }

  // task.service.ts

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, task);
  }


  deleteTask(id: number): Observable<String> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<string>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 200) {
          // Successful deletion with non-JSON response
          return of('Task deleted successfully');
        } else {
          // Handle other errors
          return throwError('Failed to delete task');
        }
      })
    );
  }
}
