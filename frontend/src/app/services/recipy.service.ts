import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipyService {
 url:String="http://localhost:1234/recipy/"
  constructor(private mh:HttpClient) { }
  getAllRecipys(): Observable<any> {
    return this.mh.get(`${this.url}getAll`)
  }
getRecipyById(id:string): Observable<any> {
return this.mh.get(`${this.url}getByCode/${id}`)
}
deleteRecipy(id:string,codeUserEnter:string): Observable<any> {
  return this.mh.delete(`${this.url}dell/${id}/${codeUserEnter}`)
}
addRecipy(recipyData: Object): Observable<any> {
    return this.mh.post(`${this.url}add`, recipyData);
  }
  updateRecipy(id: number, recipyData: Object): Observable<any> {
    return this.mh.put(`${this.url}update/${id}`, recipyData);
}
}

