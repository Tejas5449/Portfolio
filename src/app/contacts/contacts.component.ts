import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contactList = [
    {
      name: 'Mobile',
      value: '+91 8855835449',
      icon: 'assets/contact/phone.svg',
      link: 'tel:+918855835449'
    },
    {
      name: 'Email',
      value: 'tejasrao.dev@gmail.com',
      icon: 'assets/contact/email.svg',
      link: 'mailto:tejasrao.dev@gmail.com'
    },
    {
      name: 'LinkedIn',
      value: 'LinkedIn Profile',
      icon: 'assets/contact/linkedin.svg',
      link: 'YOUR_LINKEDIN_URL'
    },
    {
      name: 'GitHub',
      value: 'GitHub Profile',
      icon: 'assets/contact/git.svg',
      link: 'YOUR_GITHUB_URL'
    },
    {
      name: 'Instagram',
      value: 'Instagram Profile',
      icon: 'assets/contact/instagram.svg',
      link: 'YOUR_INSTAGRAM_URL'
    },
    {
      name: 'Facebook',
      value: 'Facebook Profile',
      icon: 'assets/contact/facebook.svg',
      link: 'YOUR_FACEBOOK_URL'
    },
    {
      name: 'Twitter / X',
      value: 'Twitter Profile',
      icon: 'assets/contact/twitter-x.svg',
      link: 'YOUR_TWITTER_URL'
    },
    {
      name: 'Location',
      value: 'Pune, Maharashtra',
      icon: 'assets/contact/location.svg',
      link: '#'
    }
  ];

}
