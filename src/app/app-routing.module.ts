import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'python-course', component: PythonComponent },
  { path: 'cplusplus-course', component: CPlusPlusComponent },
  { path: 'frontend-course', component: FrontEndComponent },
  { path: 'backend-course', component: BackEndComponent },
  { path: 'fullstack-course', component: FullStackComponent },
  { path: 'interiordesign-course', component: InteriorDesignComponent },
  { path: 'webdesign-service', component: WebDesignComponent },
  { path: 'webdev-service', component: WebDevComponent },
  { path: 'websupp-service', component: WebSupportComponent },
  { path: 'logodesign-service', component: LogoDesignComponent },
  { path: 'businesscarddesign-service', component: BusinessCardDesignComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
