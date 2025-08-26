import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    'class': 'bg-background min-h-screen'
  }
})
export class App {
  protected title = 'portfolio';
}
