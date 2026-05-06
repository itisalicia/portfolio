import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'src/app/components/button/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-introducing-me',
  imports: [Button, TranslateModule, RouterLink],
  templateUrl: './introducing-me.html',
  styleUrl: './introducing-me.css'
})
export class IntroducingMe {}
