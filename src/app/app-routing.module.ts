import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingComponent} from "./public/pages/parking/parking.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {MapComponent} from "./public/pages/map/map.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {ReviewComponent} from "./public/pages/review/review.component";
import {TopparkingsComponent} from "./public/pages/topparkings/topparkings.component";
import {HistoryComponent} from "./public/pages/history/history.component";
import {ModalComponent} from "./public/pages/modal/modal.component";
import {ModalReservationComponent} from "./public/pages/modal-reservation/modal-reservation.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'parking', component: ParkingComponent},
  {path:'map', component: MapComponent},
  {path:'review', component: ReviewComponent},
  {path: 'topparkings', component: TopparkingsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'modal-reservation', component: ModalReservationComponent},
  {path:'**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
