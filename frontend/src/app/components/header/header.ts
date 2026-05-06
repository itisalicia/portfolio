import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from '../button/button';
import { MobileButton } from './mobileButton/mobileButton';
import { SwitchLangage } from './switchLangage/switchLangage';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule, Button, MobileButton, SwitchLangage],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }
}
