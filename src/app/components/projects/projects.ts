import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface ProjectItem {
  id: string;
  repoUrl: string;
  demoUrl?: string;
  status: 'in-progress' | 'done';
  techIcons: { name: string; icon: string }[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: ProjectItem[] = [
    {
      id: 'proj1',
      repoUrl: 'https://github.com/Javier-vic/FileManiac',
      status: 'in-progress',
      techIcons: [
        { name: 'Angular', icon: '/assets/icons/angular.svg' },
        { name: 'Spring Boot', icon: '/assets/icons/spring.svg' }
      ]
    },
    {
      id: 'proj2',
      repoUrl: '',
      status: 'done',
      techIcons: [
        { name: 'Angular', icon: '/assets/icons/angular.svg' },
        { name: 'Spring Boot', icon: '/assets/icons/spring.svg' }
      ]
    }
  ];
}