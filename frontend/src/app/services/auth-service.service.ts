
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
private loggedIn: boolean = false; 
private name:string=""
private id:string=""

  constructor() {}
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  logIn(): void {
    this.loggedIn = true;
  }
  logOut(): void {
    this.loggedIn = false;
  }
  theName(Nname:string){
    this.name=Nname
  }
  giveName():string{
    return this.name
  }
  theId(Nid:string){
   this.id=Nid;
  }
  giveid():string{
    return this.id;
  }
}