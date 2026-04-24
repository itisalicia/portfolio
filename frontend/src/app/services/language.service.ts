import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

const STORAGE_KEY = 'language';
const DEFAULT_LANGUAGE = 'fr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    const initial = this.getStoredLanguage();
    this.translate.addLangs(['fr', 'en']);
    this.translate.setFallbackLang(DEFAULT_LANGUAGE);
    this.translate.use(initial);
  }

  private getStoredLanguage(): string {
    if (!this.isBrowser) {
      return DEFAULT_LANGUAGE;
    }
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
  }

  switchLanguage(language: 'fr' | 'en'): void {
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, language);
    }
    this.translate.use(language);
  }

  getCurrentLanguage(): string {
    return this.translate.getCurrentLang() || DEFAULT_LANGUAGE;
  }
}
