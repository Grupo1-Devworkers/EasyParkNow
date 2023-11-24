import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingComponent} from "./public/pages/parking/parking.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {MapComponent} from "./public/pages/map/map.component";
import {ReviewComponent} from "./public/pages/review/review.component";
import {TopparkingsComponent} from "./public/pages/topparkings/topparkings.component";
import {HistoryComponent} from "./public/pages/history/history.component";
import {ModalComponent} from "./public/pages/modal/modal.component";
import {ModalReservationComponent} from "./public/pages/modal-reservation/modal-reservation.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./public/pages/sign-up/sign-up.component";
import {EditProfileComponent} from "./public/pages/edit-profile/edit-profile.component";



const routes: Routes = [
  {path:'home', component : HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'sign-in', component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'parking', component: ParkingComponent},
  {path:'map', component: MapComponent},
  {path:'review', component: ReviewComponent},
  {path:'topparkings', component: TopparkingsComponent},
  {path:'history', component: HistoryComponent},
  {path: 'edit-profile', component:EditProfileComponent},
  {path:'modal', component: ModalComponent},
  {path:'modal-reservation', component: ModalReservationComponent},
  {path:'**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
