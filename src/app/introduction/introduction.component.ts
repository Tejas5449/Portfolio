import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
onViewCV(){
  window.open('https://docs.google.com/document/d/1EqO00J5v6zvVviFuy6p_826l3ZZ5Hx5y/edit?usp=sharing&ouid=112911744263312361469&rtpof=true&sd=true')
}
}
