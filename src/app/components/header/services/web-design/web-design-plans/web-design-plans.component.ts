import { Component, AfterViewInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-web-design-plans',
  templateUrl: './web-design-plans.component.html',
  styleUrls: ['./web-design-plans.component.css']
})
export class WebDesignPlansComponent implements AfterViewInit{
  plan: any;

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
            if (planItem.planWebDesign) {
              product.push(...planItem.planWebDesign);
            }
          }
          return product;
        })
      ).subscribe(product => {
        this.plan = product;
        console.log(this.plan);
        this.route.paramMap.subscribe(params => {
          const productId = Number(params.get('id'));
          if (productId) {
            this.plan = product.find(p => p.id === productId);
          }
        });
      });
    });
  }
}
