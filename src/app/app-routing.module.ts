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
import { WebdesignComponent } from './components/header/portfolio/webdesign/webdesign.component';
import { WebsupportPortComponent } from './components/header/portfolio/websupport-port/websupport-port.component';
import { WebdevPortComponent } from './components/header/portfolio/webdev-port/webdev-port.component';
import { LogodesPortComponent } from './components/header/portfolio/logodes-port/logodes-port.component';
import { BusscardPortComponent } from './components/header/portfolio/busscard-port/busscard-port.component';
// imports plans 
import { WebDesignPlansComponent } from './components/header/services/web-design/web-design-plans/web-design-plans.component';
import { WebDevPlansComponent } from './components/header/services/web-dev/web-dev-plans/web-dev-plans.component';
import { BusinessCardsPlansComponent } from './components/header/services/business-card-design/business-cards-plans/business-cards-plans.component';
import { LogoPlansComponent } from './components/header/services/logo-design/logo-plans/logo-plans.component';
import { WebSupportPlansComponent } from './components/header/services/web-support/web-support-plans/web-support-plans.component';
// import course moduls
import { CPlusPlusModulComponent } from './components/header/courses/c-plus-plus/c-plus-plus-modul/c-plus-plus-modul.component';
import { BackEndModulComponent } from './components/header/courses/back-end/back-end-modul/back-end-modul.component';
import { FrontEndModulComponent } from './components/header/courses/front-end/front-end-modul/front-end-modul.component';
import { FullStackModulComponent } from './components/header/courses/full-stack/full-stack-modul/full-stack-modul.component';
import { InteriorDesignModulComponent } from './components/header/courses/interior-design/interior-design-modul/interior-design-modul.component';
import { PythonModulComponent } from './components/header/courses/python/python-modul/python-modul.component';

const routes: Routes = [
  // nav routing start 
  { path: 'courses', component: CoursesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contacts', component: ContactsComponent },
  // nav routing end 

  // course routing strat 
  { path: 'python-course', component: PythonComponent },
  { path: 'cplusplus-course', component: CPlusPlusComponent },
  { path: 'frontend-course', component: FrontEndComponent },
  { path: 'backend-course', component: BackEndComponent },
  { path: 'fullstack-course', component: FullStackComponent },
  { path: 'interiordesign-course', component: InteriorDesignComponent },
  // course routing end 

  // services routing start
  { path: 'webdesign-service', component: WebDesignComponent },
  { path: 'webdesign-service/:id', component: WebDesignComponent },
  { path: 'webdev-service', component: WebDevComponent },
  { path: 'websupp-service', component: WebSupportComponent },
  { path: 'logodesign-service', component: LogoDesignComponent },
  { path: 'businesscarddesign-service', component: BusinessCardDesignComponent },
  // services routing start

  // portfolio routing start
  { path: 'webdesign-portfolio', component: WebdesignComponent},
  { path: 'webdev-portfolio', component:WebdevPortComponent},
  { path: 'websupp-portfolio', component:WebsupportPortComponent},
  { path: 'logodesign-portfolio', component:LogodesPortComponent},
  { path: 'businesscarddesign-portfolio', component:BusscardPortComponent},
  // portfolio routing end
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // plan details 
  { path:'web-design-plans/:id',component:WebDesignPlansComponent},
  { path:'web-dev-plans/:id',component:WebDevPlansComponent},
  { path:'busines-cards-plans/:id',component:BusinessCardsPlansComponent},
  { path:'logo-design-plans/:id',component:LogoPlansComponent},
  { path:'web-support-plans/:id',component:WebSupportPlansComponent},
  //modul details
  { path:'c-plus-plus-modul/:id',component:CPlusPlusModulComponent},
  { path:'back-end-modul/:id',component:BackEndModulComponent},
  { path:'front-end-modul/:id',component:FrontEndModulComponent},
  { path:'full-stack-modul/:id',component:FullStackModulComponent},
  { path:'interior-design-modul/:id',component:InteriorDesignModulComponent},
  { path:'python-modul/:id',component:PythonModulComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
