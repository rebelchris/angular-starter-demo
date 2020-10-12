import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  short: string = 'This is not so long.';
  long: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis sollicitudin turpis, ac lobortis libero.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
