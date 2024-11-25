import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueConverterService {
  private apiUrl = 'http://localhost:8080/api/convert';

  constructor(private http: HttpClient) { }

  convertValue(number: number): Observable<string> {
    const params = new HttpParams().set('number', number.toString());
    return this.http.get(this.apiUrl, { params, responseType: 'text' });
  }
}
