import { Component, AfterViewInit, ChangeDetectorRef} from '@angular/core';
// Add To langTranslate Services 
import { LangTranslateService } from 'src/app/services/lang-translate.service';
// Add To rxjs operators 
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  // declared variable genMenus for categories(Home, Courses....Contacts)
  genMenus: any;
  // declared variable dropMenus for categories(Python, C++....InterDes and others)
  dropMenus: any;
  // declared variable getGMLinks for link in genMenus(Go...To)
  getGMLinks:any;
  constructor(private langTranslate: LangTranslateService, private cdr: ChangeDetectorRef) {} 
  
  // Function for get and read json fille /bg/en/tr
  get jsonData$() {
    return this.langTranslate.jsonData$;
  }

  // Function for change on langue for website
  changeLanguage(lang: string) {
    this.langTranslate.changeLanguage(lang);
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../../assets/js/header.js';
    document.body.appendChild(script);
    setTimeout(() => {
          //get GMLinks as an array
    this.langTranslate.jsonData$.pipe(
      map(data=> {
        const getGMLinks=[];
        for(let i=0;i<data.length;i++){
          const itemLinks=data[i];
          if(itemLinks.links){
            getGMLinks.push(itemLinks.links);
          }
        }
        return getGMLinks;
      })
    ).subscribe(getGMLinks => {
      this.getGMLinks=getGMLinks;
      console.log(getGMLinks);
    });

    //get genMenus as an array
    this.langTranslate.jsonData$.pipe(
      map(data => {
        const genMenus = [];
        for (let i = 0; i < data.length; i++) {
          const menuItem = data[i];
          if (menuItem.genMenu) {
            genMenus.push(menuItem.genMenu);
          }
        }
        return genMenus;
      })
    ).subscribe(genMenus => {
      this.genMenus = genMenus;
      console.log(this.genMenus);
    });

    //get dropMenus as an array
    this.langTranslate.jsonData$.pipe(
      map(data => {
        const dropMenus = [];
        for (let i = 0; i < data.length; i++) {
          const menuItem = data[i];
          if (menuItem.dropMenu) {
            dropMenus.push(menuItem.dropMenu);
          }
        }
        return dropMenus;
      })
    ).subscribe(dropMenus => {
      this.dropMenus = dropMenus;
      console.log(this.dropMenus);
      this.cdr.detectChanges();
    });
    }, 3000);
  }
}
