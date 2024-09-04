import { Component } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  recaptchaVerified = false;

  constructor(private formService: FormService) {}

  onSubmit() {
    if (this.recaptchaVerified) {
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const recaptchaResponse = ''; // Get reCAPTCHA response token here

      this.formService.submitForm(name, email, recaptchaResponse).subscribe(response => {
        console.log('Form Submitted:', response);
      });
    } else {
      console.log('reCAPTCHA not verified');
    }
  }

  onReCAPTCHAVerified(response: string) {
    this.recaptchaVerified = true;
    console.log('reCAPTCHA Verified:', response);
  }
}
