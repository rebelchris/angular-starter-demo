import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  messageToSend: string = 'This is the message';

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(event) {
    this.messageToSend = event;
  }

}
