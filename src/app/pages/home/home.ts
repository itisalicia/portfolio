import { Component } from '@angular/core';
import { IntroducingMe } from '../introducing-me/introducing-me';

@Component({
  selector: 'app-home',
  imports: [IntroducingMe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
