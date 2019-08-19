import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { movie } from '../shared/movie';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getMovies(): Observable<movie> {
    return this.http.get<movie>(this.apiURL + '/movie')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getMovie(id): Observable<movie> {
    return this.http.get<movie>(this.apiURL + '/movie/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  deleteMovie(id) {
    return this.http.delete<movie>(this.apiURL + '/movie/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  createMovie(movie): Observable<movie> {
    return this.http.post<movie>(this.apiURL + '/movie', JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  updateMovie(id, movie): Observable<movie> {
    return this.http.put<movie>(this.apiURL + '/movie/' + id, JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
