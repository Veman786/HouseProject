import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Route,RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.components';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './service/housing.service';
import { AddPropertyComponent } from './Property/Add-property/Add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';

const appRoutes: Routes =[
  {
    path: 'buy',component :PropertyListComponent},
  {
    path: 'rent',component :PropertyListComponent},
   { path: 'Add-property',component :AddPropertyComponent},
   { path: 'property-detail/:id',component : PropertyDetailComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
