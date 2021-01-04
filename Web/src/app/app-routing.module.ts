import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GooglemapComponent} from './googlemap/googlemap.component';

const routes: Routes = [

  {path:'map',component:GooglemapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//ccommadas