import { Component } from '@angular/core';
import { Cards } from 'src/app/components/cards/cards';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [Cards, TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {}
