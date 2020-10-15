import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  ourForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log(this.ourForm.value);
  }

}
