import { Component } from '@angular/core';
import { IntroducingMe } from '../introducing-me/introducing-me';
import { Skills } from "../skills/skills";
import { Contact } from "../contact/contact";
import { Experience } from '../experience/experience';
import { Project } from "../project/project";

@Component({
  selector: 'app-home',
  imports: [IntroducingMe, Skills, Contact, Experience, Project],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
