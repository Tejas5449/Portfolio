import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  governmentProjects = [
    {
      name: 'NMMC ERP System',
      logo: './assets/projects/nmmc.jpg',
      tagline: 'Municipal ERP with 100+ live services',
    },
    {
      name: 'MHADA CFC System',
      logo: './assets/projects/mhada.png',
      tagline: 'Token-based citizen facility system',
    },
    {
      name: 'Aaple Sarkar Integrations',
      logo: './assets/projects/aaple_sarkar.png',
      tagline: 'State-level service integration',
    },
  ];

  professionalProjects = [
    {
      name: 'BenchMarks',
      logo: './assets/projects/benchmarks.png',
      tagline: 'KPI and performance tracking platform',
    },
    {
      name: 'Readers (eBook Platform)',
      logo: './assets/projects/readers.png',
      tagline: 'Kindle-like eBook experience',
    },
  ];

  personalProjects = [
    {
      name: 'Sharyat Management',
      logo: './assets/projects/sharyat.png',
      tagline: 'Bailgada Sharyat management system',
    },
    {
      name: 'Doctor Appointment',
      logo: './assets/projects/doctors.png',
      tagline: 'Online doctor booking portal',
    },
  ];
}
