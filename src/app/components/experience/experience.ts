import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface ExperienceItem {
  id: string;
  image: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences: ExperienceItem[] = [
    { id: 'exp1', image: '/assets/illustrations/experience-1.svg' },
    { id: 'exp2', image: '/assets/illustrations/experience-2.svg' },
    { id: 'exp3', image: '/assets/illustrations/experience-3.svg' }
  ];
}