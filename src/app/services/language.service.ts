import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  currentLang = signal(localStorage.getItem('lang') ?? 'es');

  constructor() {
    this.translate.use(this.currentLang());
  }

  toggleLang() {
    const newLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.translate.use(newLang);
    this.currentLang.set(newLang);
    localStorage.setItem('lang', newLang);
  }
}