import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-business-card-design',
  templateUrl: './business-card-design.component.html',
  styleUrls: ['./business-card-design.component.css']
})
export class BusinessCardDesignComponent implements AfterViewInit{
  product: any;

  constructor(private route: ActivatedRoute, private langTranslate: LangTranslateService) { }
  
  // Function for get and read json fille /bg/en/tr
  get jsonData$() {
    return this.langTranslate.jsonData$;
  }

  // Function for change on langue for website
  changeLanguage(lang: string) {
    this.langTranslate.changeLanguage(lang);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.langTranslate.jsonData$.pipe(
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
          const productId = Number(params.get('id'));
          if (productId) {
            this.product = product.find(p => p.id === productId);
          }
        });
      });
    });
  }
}
