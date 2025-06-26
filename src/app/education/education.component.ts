import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
educationList = [
  {
    degree: 'M.Sc. in Computer Science',
    institute: 'Abasaheb Garware College, Pune',
    score: 'CGPA: 9.30',
    duration: 'June 2020 – April 2022',
    logo: 'assets/education/mes.png'
  },
  {
    degree: 'B.Sc. in Computer Science',
    institute: 'Vidya Pratishthan, Baramati',
    score: '72.2%',
    duration: 'August 2017 – April 2020',
    logo: 'assets/education/vp.png'
  }
];

}
