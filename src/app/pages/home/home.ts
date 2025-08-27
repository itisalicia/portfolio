import { Component } from '@angular/core';
import { IntroducingMe } from '../introducing-me/introducing-me';
import { Skills } from "../skills/skills";

@Component({
  selector: 'app-home',
  imports: [IntroducingMe, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
