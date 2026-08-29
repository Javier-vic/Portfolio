import { Component, inject, computed } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  languageService = inject(LanguageService);

  cvUrl = computed(() =>
    this.languageService.currentLang() === 'es'
      ? '/assets/cv/cv-es.pdf'
      : '/assets/cv/cv-en.pdf'
  );
}