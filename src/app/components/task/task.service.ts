import { Injectable } from "@angular/core";
import { newTaskData } from "./task.model";


@Injectable({providedIn:'root'})
export class TasksService{
  private tasks =[
    {
      id: 't1',

      title: "Master angular",
      task:"Learn all basics and advanced features of angular",
       dueDate:'2025-12-31 08:50 AM'
    },
    {
      id: 't2',

      title: 'Build first prototype',
      task: 'Build a first prototype of the online shop website',
    date: '2024-05-31 06:45 PM',
    },
  ];
  constructor(){
    const tasks=localStorage.getItem('tasks');
    if(tasks){
      this.tasks=JSON.parse(tasks)
  }
}
  addTask(taskData:newTaskData){
    this.tasks.unshift({
      id:new Date().getTime().toString(),

      title:taskData.title,
      task:taskData.task,
      date:taskData.date,
    })
    this.saveTask();
  }
  removeTask(id:string){
    return this.tasks=this.tasks.filter((task)=>task.id!=id);
    this.saveTask();
 }
 private saveTask(){
   localStorage.setItem('tasks',JSON.stringify(this.tasks));
 }
}