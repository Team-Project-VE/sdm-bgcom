import { Component, AfterViewInit } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent {

  subject: string = '';
  name: string = '';
  surname: string = '';
  email: string = '';
  phoneNumber: string = '';
  message: string = '';

  constructor(public translationService: LangTranslateService, private sanitizer: DomSanitizer, private emailService: EmailService) {}

  get jsonData$() {
    return this.translationService.jsonData$;
  }

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }

  getSafeMapUrl(mapEmbedUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(mapEmbedUrl);
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../../assets/js/contacts.js';
    document.body.appendChild(script);
  }

  onSubmit(): void {
    const contactFormData = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phoneNumber: this.phoneNumber,
      subject: this.subject,
      message: this.message
    };

    this.emailService.sendEmail(contactFormData)
    .subscribe({
      next: (response) => {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
      },
      error: (error) => {
        console.error("Error sending email:", error);
        alert("Error sending email, please try again later.");
      }
    });
  }
}