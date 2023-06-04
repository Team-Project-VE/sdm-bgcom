import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangTranslateService {

  private locale: string;
  private jsonDataSubject = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.locale = localStorage.getItem('lang') || 'bg';
    this.loadJsonData(this.locale);
  }

  changeLanguage(lang: string) {
    // Update locale and save to localStorage
    this.locale = lang;
    localStorage.setItem('lang', lang);

    // Load JSON data for new language
    this.loadJsonData(lang);
      // Reload the page
    window.location.reload();
  }

  getTranslation(key: string) {
    return this.jsonDataSubject.getValue()[key] || key;
  }

  get jsonData$() {
    return this.jsonDataSubject.asObservable();
  }

  private loadJsonData(lang: string){
    this.http.get<any>(`assets/i18n/${lang}.json`).subscribe(data=>{
      this.jsonDataSubject.next(data);
      console.log('JSON data loaded successfully:', data);
    })
  }
}
