import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from '../button/button';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isScrolled = false;

  constructor(private languageService: LanguageService) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  switchLanguage(lang: 'fr' | 'en'): void {
    this.languageService.switchLanguage(lang);
  }
}
