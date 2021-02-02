import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  getHttpHeaders(): HttpHeaders {
    const httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer Wookie2019'
    })
    return httpHeaders;
  }
  getMovieList(): Observable<any> {
    const url = environment.baseURL + '/movies';
    return this.http.get(url, { headers: this.getHttpHeaders() });
  }
  getMovie(name): Observable<any> {
    const url = environment.baseURL + `/movies?q=${name}`;
    return this.http.get(url, { headers: this.getHttpHeaders() });
  } 
}
