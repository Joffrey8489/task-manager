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

  isAddingTask=false;

  onStartAddTask(){
    this.isAddingTask=true;
    }
    onCloseAddTask(){
    this.isAddingTask=false;
    }

    @Input({required:true}) task!: Task;

private TasksService=inject(TasksService);
onCompleteTask(){
// this.TasksService.removeTask(this.task.id)
}
  }
