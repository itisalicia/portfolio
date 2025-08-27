import { Component, Input } from '@angular/core';
import { ZardCardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'app-cards',
  imports: [ZardCardComponent],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {
  @Input() title: string = "";
  @Input() skills: Skill[] = [];

}
