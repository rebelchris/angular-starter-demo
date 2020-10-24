import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

    constructor(private http: HttpClient) { 
      this.http.get(`https://reqres.in/api/users?page=2`).subscribe(res => {
        console.log('load done');
      })
    }

  ngOnInit(): void {
  }

}
