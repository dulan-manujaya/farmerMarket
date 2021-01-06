import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:49710/api";

  constructor(private http:HttpClient) { }

  // //getLists

  getLocationList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/farmer');
  }

  // //getFarmerList

  // getFarmerList():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl+'/location');
  // }

}
