import { Injectable, inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { NewTaskData } from "./task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private tasks = [
    {
      id: 't1',
      title: "Master angular",
      task: "Learn all basics and advanced features of angular",
      date: '2025-12-31 08:50 AM'
    },
    {
      id: 't2',
      title: 'Build first prototype',
      task: 'Build a first prototype of the online shop website',
      date: '2024-05-31 06:45 PM',
    },
  ];

  constructor() {
    if (this.isBrowser) {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }
  }

  addTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      task: taskData.task,
      date: taskData.date,

    });

    this.saveTask();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTask();
  }

  private saveTask() {
    if (this.isBrowser) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  getTasks() {
    return this.tasks;
  }

}