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
import { PortfolioComponent } from './components/header/portfolio/portfolio.component';
import { ServicesComponent } from './components/header/services/services.component';
import { OffersComponent } from './components/header/offers/offers.component';
import { AboutUsComponent } from './components/header/about-us/about-us.component';
import { ContactsComponent } from './components/header/contacts/contacts.component';
import { WebDesignComponent } from './components/header/services/web-design/web-design.component';
import { WebDevComponent } from './components/header/services/web-dev/web-dev.component';
import { WebSupportComponent } from './components/header/services/web-support/web-support.component';
import { LogoDesignComponent } from './components/header/services/logo-design/logo-design.component';
import { BusinessCardDesignComponent } from './components/header/services/business-card-design/business-card-design.component';
import { HomeComponent } from './components/header/home/home.component';
import { FormsModule } from '@angular/forms';
import { WebdesignComponent } from './components/header/portfolio/webdesign/webdesign.component';
import { WebdevPortComponent } from './components/header/portfolio/webdev-port/webdev-port.component';
import { LogodesPortComponent } from './components/header/portfolio/logodes-port/logodes-port.component';
import { BusscardPortComponent } from './components/header/portfolio/busscard-port/busscard-port.component';
import { WebDesignPlansComponent } from './components/header/services/web-design/web-design-plans/web-design-plans.component';
import { WebDevPlansComponent } from './components/header/services/web-dev/web-dev-plans/web-dev-plans.component';
import { BusinessCardsPlansComponent } from './components/header/services/business-card-design/business-cards-plans/business-cards-plans.component';
import { LogoPlansComponent } from './components/header/services/logo-design/logo-plans/logo-plans.component';
import { WebSupportPlansComponent } from './components/header/services/web-support/web-support-plans/web-support-plans.component';
import { PoliciesComponent } from './components/policies/policies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // remove the conflict markers and keep this component
    MainComponent,
    FooterComponent,
    PortfolioComponent,
    ServicesComponent,
    OffersComponent,
    AboutUsComponent,
    ContactsComponent,
    WebDesignComponent,
    WebDevComponent,
    WebSupportComponent,
    LogoDesignComponent,
    BusinessCardDesignComponent,
    EmailHeaderComponent,
    HomeComponent,
    WebdesignComponent,
    WebdevPortComponent,
    LogodesPortComponent,
    BusscardPortComponent,
    WebDesignPlansComponent,
    WebDevPlansComponent,
    BusinessCardsPlansComponent,
    LogoPlansComponent,
    WebSupportPlansComponent,
    PoliciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    LangTranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

