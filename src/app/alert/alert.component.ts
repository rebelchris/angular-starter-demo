import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() messageBack = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageBack(message: string) {
    this.messageBack.emit(message);
  }

}
