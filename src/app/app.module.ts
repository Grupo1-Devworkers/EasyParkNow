import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParkingComponent } from './public/pages/parking/parking.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { MapComponent } from './public/pages/map/map.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { ReviewComponent } from './public/pages/review/review.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    PageNotFoundComponent,
    MapComponent,
    HomeComponent,
    LoginComponent,
    ReviewComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        RouterLink,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
