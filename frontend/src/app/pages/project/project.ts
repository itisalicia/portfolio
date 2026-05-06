import { Component } from '@angular/core';
import { Cards } from 'src/app/components/cards/cards';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  imports: [Cards, TranslateModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {}
