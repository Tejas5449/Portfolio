import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
  // Frontend
  { name: 'Angular', logo: './assets/skills/angular.svg' },
  {name : 'Webpack', logo : './assets/skills/webpack.svg'},
  { name: 'TypeScript', logo: './assets/skills/typescript.svg' },
  { name: 'JavaScript', logo: './assets/skills/javascript.svg' },
  { name: 'HTML5', logo: './assets/skills/html5.svg' },
  { name: 'CSS3', logo: './assets/skills/css3.svg' },
  // { name: 'PWA', logo: './assets/skills/pwa.svg' },
  { name: 'Tailwind CSS', logo: './assets/skills/tailwind.svg' },
  { name: 'Bootstrap', logo: './assets/skills/bootstrap.svg' },
  { name: 'Material UI', logo: './assets/skills/material.svg' },
  { name: 'RxJS', logo: './assets/skills/rxjs.svg' },
  { name: 'NgRx', logo: './assets/skills/ngrx.svg' },


  // Backend
  { name: 'Java', logo: './assets/skills/java.svg' },
  { name: 'Spring Boot', logo: './assets/skills/springboot.svg' },
  { name: 'J2EE', logo: './assets/skills/j2ee.svg' },
  { name: 'JPA', logo: './assets/skills/jpa.svg' },
  { name: 'Hibernate', logo: './assets/skills/Hibernate.svg' },
  { name: 'REST APIs', logo: './assets/skills/restapi.svg' },
  { name: 'Maven', logo: './assets/skills/Maven.svg' },
  { name: 'Swagger', logo: './assets/skills/Swagger.svg' },

  // Database
  { name: 'PostgreSQL', logo: './assets/skills/postgresql.svg' },
  { name: 'MySQL', logo: './assets/skills/MySQL.svg' },

  // DevOps & Tools
  { name: 'Git', logo: './assets/skills/git.svg' },
  { name: 'GitHub', logo: './assets/skills/github.svg' },
  { name: 'GitLab', logo: './assets/skills/gitlab.svg' },
  { name: 'Bitbucket', logo: './assets/skills/bitbucket.svg' },
  { name: 'Jenkins', logo: './assets/skills/jenkins.svg' },
  { name: 'Docker', logo: './assets/skills/docker.svg' },
  { name: 'Kubernetes', logo: './assets/skills/kubernetes.svg' },
  { name: 'Jira', logo: './assets/skills/jira.svg' },
  { name: 'Postman', logo: './assets/skills/postman.svg' },

  // Testing
  { name: 'JUnit', logo: './assets/skills/junit.svg' },
  { name: 'Mockito', logo: './assets/skills/mockito.svg' },
  { name: 'Karma', logo: './assets/skills/karma.svg' },
  { name: 'Jasmine', logo: './assets/skills/jasmine.svg' },

  // Architecture / Platform
  { name: 'Electron.js', logo: './assets/skills/electron.svg' },
  { name: 'PWA', logo: './assets/skills/pwa.svg' },
  { name: 'IndexedDB', logo: './assets/skills/indexed-db.svg' },
];
}
