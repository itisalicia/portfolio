import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-switch-langage',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './switchLangage.html'
})
export class SwitchLangage {
  dropdownOpen = false;

  constructor(private languageService: LanguageService) { }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  switchLanguage(lang: 'fr' | 'en'): void {
    this.languageService.switchLanguage(lang);
    this.dropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.dropdownOpen = false;
    }
  }
}
