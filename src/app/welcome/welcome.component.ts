import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  submitted: boolean = false;
  ourForm = new FormGroup({
    checkbox: new FormControl('', Validators.required),
    field_1: new FormControl(''),
    field_2: new FormControl(''),
  });

  radioChange() {
    if (this.ourForm.controls.checkbox.value == 2) {
      this.ourForm.controls.field_1.setValidators([Validators.nullValidator]);
      this.ourForm.controls.field_2.setValidators([Validators.required]);
    } else {
      this.ourForm.controls.field_1.setValidators([Validators.required]);
      this.ourForm.controls.field_2.setValidators([Validators.nullValidator]);
    }

    this.ourForm.controls.field_1.updateValueAndValidity();
    this.ourForm.controls.field_2.updateValueAndValidity();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.ourForm.value);
  }
}
