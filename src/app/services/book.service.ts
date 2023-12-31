import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  getBookList(): Observable<any>{
    return this._http.get('http://localhost:3000/book');
  }

  delete(id:number): Observable<any>{
     return this._http.delete(`http://localhost:3000/book/${id}`);
  }
}
