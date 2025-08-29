import { Component } from '@angular/core';
import { IntroducingMe } from '../introducing-me/introducing-me';
import { Skills } from "../skills/skills";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [IntroducingMe, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
