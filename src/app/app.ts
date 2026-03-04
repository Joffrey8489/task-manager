import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Task } from "./components/task/task";
import { Footer } from "./components/footer/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Task, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
}
