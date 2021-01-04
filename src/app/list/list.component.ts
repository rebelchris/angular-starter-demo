import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  searchForm;
  people = [
    {
      firstname: 'Chris',
      lastname: 'Bongers',
    },
    {
      firstname: 'Peter',
      lastname: 'Rabbit',
    },
    {
      firstname: 'Donald',
      lastname: 'Duck',
    },
    {
      firstname: 'Lady',
      lastname: 'Gaga',
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  ngOnInit(): void {}
}
