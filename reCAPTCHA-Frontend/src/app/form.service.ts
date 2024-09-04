import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:8080/api/form/submit';

  constructor(private http: HttpClient) {}

  submitForm(name: string, email: string, recaptchaResponse: string): Observable<any> {
    return this.http.post(this.apiUrl, { name, email, gRecaptchaResponse: recaptchaResponse });
  }
}
