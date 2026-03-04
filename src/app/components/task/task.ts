import { Component, inject, Input } from '@angular/core';
import { NewTask } from "./new-task/new-task";
import { TasksService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  complete?:boolean;
  isAddingTask=false;
  tasks: any[] = [];


  constructor(private tasksService: TasksService) {
    this.tasks = this.tasksService.getTasks();
  }

  onStartAddTask(){
    this.isAddingTask=true;
    }
    onCloseAddTask(){
      console.log("Closing dialog...");
    this.isAddingTask=false;
    }
    onDeleteTask(id: string) {
      console.log("apagando....")
      this.tasksService.removeTask(id);
      this.tasks = this.tasksService.getTasks();
    }

  }
