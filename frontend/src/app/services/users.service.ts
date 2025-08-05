import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:1234/user/";

  constructor(private mh: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.mh.get(`${this.url}getAll`);
  }

  getUserById(name: string, pass: string): Observable<any> {
    return this.mh.get(`${this.url}getById/${name}/${pass}`);
  }

  addUser(userData: Object): Observable<any> {
    return this.mh.post(`${this.url}add`, userData);
  }

  updateFavoriteRecipe(userId: string, userData: Object): Observable<any> {
    return this.mh.put(`${this.url}updateFavoriteRecipe/${userId}`, userData );
  }
  getFavoriteRecipeNames(userId:string):Observable<any>{
    return this.mh.get(`${this.url}getFavoriteRecipeNames/${userId}`)
  }
}