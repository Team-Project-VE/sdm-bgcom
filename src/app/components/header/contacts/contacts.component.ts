import { Component, AfterViewInit } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EmailService } from 'src/app/services/email.service';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})


export class ContactsComponent implements AfterViewInit {

  public product: any;
  public subject: string = '';
  public name: string = '';
  public surname: string = '';
  public email: string = '';
  public phoneNumber: string = '';
  public message: string = '';
  public endpoint: string = '';
  public price: string = '';

  constructor(public translationService: LangTranslateService, private sanitizer: DomSanitizer, private emailService: EmailService, private route: ActivatedRoute) {}

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

    //For Web Design
    setTimeout(() => {
      this.translationService.jsonData$.pipe(
        map(data => {
          const product = [];
          for (let i = 0; i < data.length; i++) {
            const planItem = data[i];
            if (planItem.planWebDesign) {
              product.push(...planItem.planWebDesign);
            }
          }
          return product;
        })
      ).subscribe(product => {
        this.product = product;
        console.log(this.product);
        this.route.paramMap.subscribe(params => {
          const productId = (params.get('id'));
          if (productId) {
            this.product = product.find(p => p.id === productId);
            if(this.product) {
              this.price = this.product.price;
            }
          }
        });
      });
    });

    //For web dev
    setTimeout(() => {
      this.translationService.jsonData$.pipe(
        map(data => {
          const product = [];
          for (let i = 0; i < data.length; i++) {
            const planItem = data[i];
            if (planItem.planWebDev) {
              product.push(...planItem.planWebDev);
            }
          }
          return product;
        })
      ).subscribe(product => {
        this.product = product;
        console.log(this.product);
        this.route.paramMap.subscribe(params => {
          const productId = (params.get('id'));
          if (productId) {
            this.product = product.find(p => p.id === productId);
            if(this.product) {
              this.price = this.product.price;
            }
          }
        });
      });
    });

    //For Logo Deisgn
    setTimeout(() => {
      this.translationService.jsonData$.pipe(
        map(data => {
          const product = [];
          for (let i = 0; i < data.length; i++) {
            const planItem = data[i];
            if (planItem.planLogoDesign) {
              product.push(...planItem.planLogoDesign);
            }
          }
          return product;
        })
      ).subscribe(product => {
        this.product = product;
        console.log(this.product);
        this.route.paramMap.subscribe(params => {
          const productId = (params.get('id'));
          if (productId) {
            this.product = product.find(p => p.id === productId);
            if(this.product) {
              this.price = this.product.price;
            }
          }
        });
      });
    });
    //For Business-Cards
    setTimeout(() => {
      this.translationService.jsonData$.pipe(
        map(data => {
          const product = [];
          for (let i = 0; i < data.length; i++) {
            const planItem = data[i];
            if (planItem.planBusinessCards) {
              product.push(...planItem.planBusinessCards);
            }
          }
          return product;
        })
      ).subscribe(product => {
        this.product = product;
        console.log(this.product);
        this.route.paramMap.subscribe(params => {
          const productId = (params.get('id'));
          if (productId) {
            this.product = product.find(p => p.id === productId);
            if(this.product) {
              this.price = this.product.price;
            }
          }
        });
      });
    });

    //For Web-Support
    setTimeout(() => {
        this.translationService.jsonData$.pipe(
          map(data => {
            const product = [];
            for (let i = 0; i < data.length; i++) {
              const planItem = data[i];
              if (planItem.planWebSupport) {
                product.push(...planItem.planWebSupport);
              }
            }
            return product;
          })
        ).subscribe(product => {
          this.product = product;
          console.log(this.product);
          this.route.paramMap.subscribe(params => {
            const productId = (params.get('id'));
            if (productId) {
              this.product = product.find(p => p.id === productId);
              if(this.product) {
                this.price = this.product.price;
              }
            }
          });
        });
    });
  }

  onSubmit(): void {
    const contactFormData = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phoneNumber: this.phoneNumber,
      subject: this.subject,
      message: this.message,
      endpoint: window.location.href,
      price: this.price
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