import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private emailApiUrl = "http://localhost:3000/send-email";

  constructor(private http: HttpClient) {}

  sendEmail(contactFormData: { 
    subject: string,
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    message: string,
    endpoint: string
}): Observable<any> {
    return this.http.post(this.emailApiUrl, contactFormData).pipe(
        catchError((error) => {
            console.log("Error in EmailService", error);
            return throwError(error);
        })
    );
  }
}