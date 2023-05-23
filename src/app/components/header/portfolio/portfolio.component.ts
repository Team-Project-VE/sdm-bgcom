import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../../../../assets/js/portfolio.js';
    document.body.appendChild(script);
  }
  

}
