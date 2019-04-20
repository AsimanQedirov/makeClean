import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// slick carousel
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FirsthomeComponent } from './firsthome/firsthome.component';
import { SecondhomeComponent } from './secondhome/secondhome.component';
import { HomeComponent } from './home/home.component';
import { SlickComponent } from './home/slick/slick.component';
import { Pipe1Pipe } from './home/slick/pipe1.pipe';
import { Routes, RouterModule } from '@angular/router';
import { IndustrieComponent } from './home/slick/industrie/industrie.component';
import { ServiceofferComponent } from './home/slick/serviceoffer/serviceoffer.component';
import { Serviceoffer2Component } from './home/slick/serviceoffer2/serviceoffer2.component';
import { CeleverComponent } from './home/slick/celever/celever.component';
import { StatisticComponent } from './home/slick/statistic/statistic.component';
import { LatestnewsComponent } from './home/slick/latestnews/latestnews.component';
import { AppcleanComponent } from './home/slick/appclean/appclean.component';
import { AboutComponent } from './about/about.component';
import { ClientsayComponent } from './about/clientsay/clientsay.component';
import { ServiceComponent } from './service/service.component';
import { DetailsComponent } from './service/details/details.component';
import { ServicesComponent } from './service/services/services.component';
  const appRoutes : Routes =[
    {
      path : '',
      component:FirsthomeComponent
    },
    {
      path:'secondhome',
      component:SecondhomeComponent
    },
    {
      path : 'about',
      component:AboutComponent
    },
    {
      path: 'details',
      component : DetailsComponent
    },
    {
      path: 'services',
      component : ServicesComponent
    }
  ]
@NgModule({
  declarations: [
    AppComponent,
    FirsthomeComponent,
    SecondhomeComponent,
    HomeComponent,
    SlickComponent,
    Pipe1Pipe,
    IndustrieComponent,
    ServiceofferComponent,
    Serviceoffer2Component,
    CeleverComponent,
    StatisticComponent,
    LatestnewsComponent,
    AppcleanComponent,
    AboutComponent,
    ClientsayComponent,
    ServiceComponent,
    DetailsComponent,
    ServicesComponent
 ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SlickCarouselModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
