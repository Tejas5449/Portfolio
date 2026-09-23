import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {

  // =========================
  // CURRENT / HEALTHCARE PROJECTS
  // =========================

  governmentProjects = [

  {
    name: 'BHAVYA HIMS – Bihar',
    logo: './assets/projects/bhavya_hmis.png',
    tagline: 'Login to BHAVYA HIMS facility for Bihar Government Hospitals',
  },

  {
    name: 'HMIS Tripura',
    logo: './assets/projects/tripura_ihmis.png',
    tagline: 'Healthcare Management Information System for Tripura Government',
  },

  {
    name: 'mASHA Dashboard – Bihar',
    logo: './assets/projects/bhavya_asha.png',
    tagline: 'ASHA Worker Management and Monitoring Platform for Bihar',
  },

  {
    name: 'Tripura ASHA Dashboard',
    logo: './assets/projects/tripura_logo.png',
    tagline: 'ASHA Worker Management and Monitoring Platform for Tripura',
  }
];


  // =========================
  // PROFESSIONAL PROJECTS
  // =========================

  professionalProjects = [

    {
      name: 'NMMC ERP System',
      logo: './assets/projects/nmmc.png',
      tagline: 'Municipal ERP for Navi Mumbai Government Services',
    },

    {
      name: 'MHADA Citizen Facility Center',
      logo: './assets/projects/mhada.png',
      tagline: 'Token-based citizen facility and service management',
    },

    // {
    //   name: 'Readers',
    //   logo: './assets/projects/readers.png',
    //   tagline: 'Full-stack eBook reading platform',
    // },

    {
      name: 'Performance Benchmarking',
      logo: './assets/projects/bench_marx.png',
      tagline: 'Real-time application performance analytics dashboard',
    },
    {
      name: 'NewsRise',
      logo: './assets/projects/newsrise.png',
      tagline: 'Desktop application built with Angular and Electron.js',
    },


  ];


  // =========================
  // OTHER PROJECTS
  // =========================

  personalProjects = [

    {
      name: 'Sharyat Management',
      logo: './assets/projects/sharyat.png',
      tagline: 'Bailgada Sharyat management system',
    },

    {
      name: 'Pathology Lab Management System',
      logo: './assets/projects/pathalogy.png',
      tagline: 'Lab test, employee and expense management system',
    },

  ];

}