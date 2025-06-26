import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experienceList = [
    {
      role: 'Software Developer',
      company: 'Probity Software Pvt Ltd',
      duration: 'Sept 2023 – Present',
      logo: 'assets/experiance/probity.jpg',
      points: [
        'Developed token-based citizen facility center system using Angular 16, Spring Boot & PostgreSQL.',
        'Delivered 100+ citizen-facing services for NMMC ERP system.',
        'Built dynamic form builder, workflow tools, and scalable REST APIs with RxJS, NgRx, and Tailwind CSS.',
      ],
      showMore: false,
    },
    {
      role: 'Junior Software Developer',
      company: 'Ainosoft Pvt Ltd',
      duration: 'Jan 2022 – Jan 2023',
      logo: 'assets/experiance/ainosoft.png',
      points: [
        'Built internal dashboards for static code analysis using Spring Boot & Angular.',
        'Developed eBook reader web app using Angular + Spring Boot.',
        'Created performance analytics dashboards with Chart.js.',
      ],
      showMore: false,
    },
  ];
}
