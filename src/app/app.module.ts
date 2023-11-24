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
import { ReviewComponent } from './public/pages/review/review.component';
import {MatIconModule} from "@angular/material/icon";
import { TopparkingsComponent } from './public/pages/topparkings/topparkings.component';
import { HistoryComponent } from './public/pages/history/history.component';
import {MatTableModule} from "@angular/material/table";
import { ModalComponent } from './public/pages/modal/modal.component';
import { ModalReservationComponent } from './public/pages/modal-reservation/modal-reservation.component';
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./public/pages/sign-up/sign-up.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import { ParkingCardComponent } from './manage-park/component/parking-card/parking-card.component';
import {MatMenuModule} from "@angular/material/menu";
import { EditProfileComponent } from './public/pages/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    PageNotFoundComponent,
    MapComponent,
    HomeComponent,
    ReviewComponent,
    TopparkingsComponent,
    HistoryComponent,

    SignInComponent,
    SignUpComponent,

    ModalComponent,
    ModalReservationComponent,
    ParkingCardComponent,
    EditProfileComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
