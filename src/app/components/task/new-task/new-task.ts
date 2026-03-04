import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TasksService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() close= new EventEmitter<void>();
  enteredTitle='';
 enteredTask='';
enteredDate='';

private TasksService=inject(TasksService)
  onCancel(){
    this.close.emit();
  }

  onSubmit(){
   this.TasksService.addTask({
    title:this.enteredTitle,
    task:this.enteredTask,
  date:this.enteredDate
   })
   this.close.emit();}
}