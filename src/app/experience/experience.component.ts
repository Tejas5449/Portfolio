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
      company: 'Plus91 Technologies Pvt Ltd',
      location: 'Pune, Maharashtra',
      duration: 'June 2025 – Present',
      logo: 'assets/experiance/plus91-logo.jpg',
      project: 'MediXcel – Healthcare Management Platform',
      points: [
        'Developed and maintained Angular modules for MediXcel, a healthcare platform deployed across government hospitals in Bihar and being rolled out in Tripura.',
        'Built offline-first functionality using Angular PWA and IndexedDB for low-connectivity healthcare environments.',
        'Led the migration of the mASHA Dashboard from Angular 15 to Angular 20.',
        'Contributed to backend development using Java and Spring Boot and wrote JUnit test cases.',
        'Built healthcare modules including Dialysis Management, Ward Bed Management, and Operations systems.',
        'Developed the ASHA Incentive Portal with multi-level approval workflows, disbursement processing, cash memo generation, and earnings dashboards.',
        'Maintained the NewsRise desktop application using Angular and Electron.js.'
      ],
      showMore: false,
    },

    {
      role: 'Software Developer',
      company: 'Probity Software Pvt Ltd',
      location: 'Pune, Maharashtra',
      duration: 'Sept 2023 – June 2025',
      logo: 'assets/experiance/probity.jpg',
      project: 'Navi Mumbai Municipal Corporation ERP & MHADA CFC',
      points: [
        'Led development of the Online RTS system with a configurable Angular Form Builder and Dynamic Workflow Management solution.',
        'Designed REST APIs and backend services using Java and Spring Boot for the workflow engine.',
        'Developed Angular modules for Water Tax, Survey Database Management, and Works Management.',
        'Built the MHADA Citizen Facility Center application with token-based queue management.',
        'Developed responsive applications using Angular Material and Tailwind CSS.',
        'Collaborated with cross-functional teams to deliver scalable and user-friendly government ERP solutions.'
      ],
      showMore: false,
    },

    {
      role: 'Junior Software Developer',
      company: 'Ainosoft Pvt Ltd',
      location: 'Pune, Maharashtra',
      duration: 'Jan 2022 – Jan 2023',
      logo: 'assets/experiance/ainosoft.png',
      project: 'Readers eBook Platform & Performance Benchmark Analysis',
      points: [
        'Developed responsive full-stack features for the Readers eBook platform using Angular and Spring Boot.',
        'Built frontend interfaces using Angular, Material UI, and jQuery.',
        'Developed backend services using Spring Boot and Java 8+.',
        'Built real-time performance benchmarking dashboards using Angular and Chart.js.',
        'Deployed application builds using Docker and Kubernetes.',
        'Implemented unit testing using JUnit and Mockito within Agile sprint workflows.'
      ],
      showMore: false,
    }
  ];
}