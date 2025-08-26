import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { IntroducingMe } from "./pages/introducing-me/introducing-me";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, IntroducingMe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    'class': 'bg-background min-h-screen'
  }
})
export class App {
  protected title = 'portfolio';
}
