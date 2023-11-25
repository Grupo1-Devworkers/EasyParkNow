import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {MapComponent} from "./public/pages/map/map.component";
import {ReviewComponent} from "./public/component/review/review.component";
import {TopparkingsComponent} from "./public/component/topparkings/topparkings.component";
import {HistoryComponent} from "./public/pages/history/history.component";
import {ModalComponent} from "./public/pages/modal/modal.component";
import {ModalReservationComponent} from "./public/pages/modal-reservation/modal-reservation.component";
import {SignInComponent} from "./public/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./public/pages/sign-up/sign-up.component";

import {AddParkingComponent} from "./owner/component/add-parking/add-parking.component";
import {ParkingListComponent} from "./owner/component/parking-list/parking-list.component";
import {InterfaceOwnerComponent} from "./owner/component/interface-owner/interface-owner.component";
import {ParkingCardComponent} from "./public/component/parking-card/parking-card.component";
import {ParkingScreenComponent} from "./public/pages/parking-screen/parking-screen.component";

import {EditProfileComponent} from "./public/pages/edit-profile/edit-profile.component";
import {AppHomeComponent} from "./public/pages/app-home/app-home.component";



const routes: Routes = [
  {path:'app-home', component:AppHomeComponent},
  {path:'home', component : HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},


  {path:'add-parking', component: AddParkingComponent},
  {path:'parking-list', component: ParkingListComponent},
  {path:'interface-owner', component: InterfaceOwnerComponent},

  {path:'parking-card', component: ParkingCardComponent},
  { path: 'parking-screen', component: ParkingScreenComponent },

  {path:'sign-in', component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
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
