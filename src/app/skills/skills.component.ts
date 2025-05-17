import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', logo: './assets/skills/angular.svg' },
    { name: 'JavaScript', logo: './assets/skills/javascript.svg' },
    { name: 'TypeScript', logo: './assets/skills/typescript.svg' },
    { name: 'Tailwind CSS', logo: './assets/skills/tailwind.svg' },
    { name: 'Spring Boot', logo: './assets/skills/springboot.svg' },
    { name: 'Java', logo: './assets/skills/java.svg' },
    { name: 'PostgreSQL', logo: './assets/skills/postgresql.svg' },
    { name: 'RxJS', logo: './assets/skills/rxjs.svg' },
    { name: 'NgRx', logo: './assets/skills/ngrx.svg' },
    { name: 'Git', logo: './assets/skills/git.svg' },
    { name: 'HTML5', logo: './assets/skills/html5.svg' },
    { name: 'CSS3', logo: './assets/skills/css3.svg' },
    { name: 'Docker', logo: './assets/skills/docker.svg' },
    { name: 'Kubernetes', logo: './assets/skills/kubernetes.svg' },
  ];
}
