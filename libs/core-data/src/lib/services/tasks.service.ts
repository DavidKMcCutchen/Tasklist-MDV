import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '@tasklist/api-interfaces';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  model = 'tasks';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Task[]>(this.getUrl());
  }

  find(taskId: string) {
    return this.httpClient.get<Task>(this.getUrlById(taskId))
  }

  create(task: Task) {
    return this.httpClient.post<Task>(this.getUrl(), task);
  }

  update(task: Task) {
    return this.httpClient.patch<Task>(this.getUrlById(task.id), task);
  }

  delete(taskId: string) {
    return this.httpClient.delete(this.getUrlById(taskId));
  }

  // Build URL Helpers 
  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}