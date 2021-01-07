import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }


  // public login(userInfo: User){
  //   localStorage.setItem('ACCESS_TOKEN', "access_token");
  // }


  public isWebMasterLoggedIn(){
    return localStorage.getItem('webmaster') !== null;
  }
  public isDOALoggedIn(){
    return localStorage.getItem('doa') !== null;
  }
  public isKeellsLoggedIn(){
    return localStorage.getItem('keells') !== null;
  }
  public isFarmerLoggedIn(){
    return localStorage.getItem('farmer') !== null;
  }


  public logout(){
    localStorage.clear()
  }
}