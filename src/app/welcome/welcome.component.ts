import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Welcome to my Angular app');
    this.metaService.addTags([
      { name: 'keywords', content: 'Welcome, Hello' },
      {
        name: 'description',
        content:
          'We would like to welcome you to the wonderful world of Angular Universal',
      },
    ]);
  }

  openLink(): void {
    window.open('https://daily-dev-tips.com', '_blank');
  }
}
