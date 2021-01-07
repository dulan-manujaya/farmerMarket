import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FarmerLoginComponent} from './farmer-login/farmer-login.component';
import {FarmerRegisterComponent} from './farmer-register/farmer-register.component';
import {FarmerProfileComponent} from './farmer-profile/farmer-profile.component';

import {UserLoginComponent} from './user-login/user-login.component';
import {UserFarmerprofileComponent } from './user-farmerprofile/user-farmerprofile.component'; 

import {WebmasterDashboardComponent} from './webmaster-dashboard/webmaster-dashboard.component';

import {GooglemapComponent} from './googlemap/googlemap.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'map'},

  { path: 'farmer-login', component: FarmerLoginComponent },
  { path: 'farmer-register', component: FarmerRegisterComponent},
  { path: 'farmer-profile', component: FarmerProfileComponent},

  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-farmerprofile', component: UserFarmerprofileComponent },

  { path: 'webmaster-dashboard', component: WebmasterDashboardComponent },

  {path:'map',component:GooglemapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
