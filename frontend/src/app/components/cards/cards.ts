import { Component, Input } from '@angular/core';
import { ZardCardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'app-cards',
  imports: [ZardCardComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  @Input() title?: string = "";
  @Input() skills : Skill[] = [];
  @Input() projectTitle? : string = "";
  @Input() projectImage? : string = "";
  @Input() description? : string = "";
  @Input() githubLink? : string = "";
  @Input() iconSize?: string ="w-[2rem]"

}
