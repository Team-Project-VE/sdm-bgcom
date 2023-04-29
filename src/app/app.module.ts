import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { EmailHeaderComponent } from './components/email-header/email-header.component';
import { LangTranslateService } from './services/lang-translate.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/header/courses/courses.component';
import { PortfolioComponent } from './components/header/portfolio/portfolio.component';
import { ServicesComponent } from './components/header/services/services.component';
import { OffersComponent } from './components/header/offers/offers.component';
import { AboutUsComponent } from './components/header/about-us/about-us.component';
import { ContactsComponent } from './components/header/contacts/contacts.component';
import { PythonComponent } from './components/header/courses/python/python.component';
import { CPlusPlusComponent } from './components/header/courses/c-plus-plus/c-plus-plus.component';
import { FrontEndComponent } from './components/header/courses/front-end/front-end.component';
import { BackEndComponent } from './components/header/courses/back-end/back-end.component';
import { FullStackComponent } from './components/header/courses/full-stack/full-stack.component';
import { InteriorDesignComponent } from './components/header/courses/interior-design/interior-design.component';
import { WebDesignComponent } from './components/header/services/web-design/web-design.component';
import { WebDevComponent } from './components/header/services/web-dev/web-dev.component';
import { WebSupportComponent } from './components/header/services/web-support/web-support.component';
import { LogoDesignComponent } from './components/header/services/logo-design/logo-design.component';
import { BusinessCardDesignComponent } from './components/header/services/business-card-design/business-card-design.component';
import { HomeComponent } from './components/header/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // remove the conflict markers and keep this component
    MainComponent,
    FooterComponent,
    CoursesComponent,
    PortfolioComponent,
    ServicesComponent,
    OffersComponent,
    AboutUsComponent,
    ContactsComponent,
    PythonComponent,
    CPlusPlusComponent,
    FrontEndComponent,
    BackEndComponent,
    FullStackComponent,
    InteriorDesignComponent,
    WebDesignComponent,
    WebDevComponent,
    WebSupportComponent,
    LogoDesignComponent,
    BusinessCardDesignComponent,
    EmailHeaderComponent,
    HomeComponent,
    // remove the EmailHeaderComponent as it causes conflict
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LangTranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

