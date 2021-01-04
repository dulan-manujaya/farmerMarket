import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { ShowGooglemapComponent } from './googlemap/show-googlemap/show-googlemap.component';
import { AddEditGooglemapComponent } from './googlemap/add-edit-googlemap/add-edit-googlemap.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core'; 


@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    ShowGooglemapComponent,
    AddEditGooglemapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ 
      apiKey:"AIzaSyDVamh7-n7dttovSZq4X2asx-IHA64oyX0"
    }) 
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
