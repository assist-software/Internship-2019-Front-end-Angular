import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { movie } from '../shared/movie';
import { user } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:3000';
  apiUserDB = 'http://192.168.151.193:8080/user';
  // apiUserDBSignUP = 'http://192.168.151.193:8080/signup';
  apiURLDB = 'http://192.168.151.193:8080/api/movie';
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getMovies(): Observable<any> {
    console.log("Am intrat in server");
    return this.http.get<any>(this.apiURLDB)

      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // getMovies(): Observable<any> {
  //   return this.http.get<any>(this.apiURL + '/movie')
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }
  getMoviesUser(): Observable<movie> {
    return this.http.get<movie>(this.apiURL + '/movieUser')
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
  // getUser(id): Observable<user> {
  //   return this.http.get<user>(this.apiURL + '/user/' + id)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }
  getUser(id): Observable<any> {
    return this.http.get<any>(this.apiUserDB + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // deleteMovie(id) {
  //   return this.http.delete<movie>(this.apiURL + '/movie/' + id, this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }
  deleteMovie(id) {

    return this.http.delete<any>(this.apiURLDB + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  deleteMovieUser(id) {
    return this.http.delete<movie>(this.apiURL + '/movieUser/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // createMovie(movie): Observable<movie> {
  //   return this.http.post<movie>(this.apiURL + '/movie', JSON.stringify(movie), this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }
  createMovie(movie): Observable<any> {
    return this.http.post<any>(this.apiURLDB, JSON.stringify(movie), this.httpOptions)
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
  // updateUser(id, user): Observable<user> {
  //   return this.http.put<user>(this.apiURL + '/user/' + id, JSON.stringify(user), this.httpOptions)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }
  updateUser(id, user): Observable<any> {
    return this.http.put<any>(this.apiUserDB + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // Error handling 
  handleError(error) {
<<<<<<< HEAD
    // let errorMessage = '';
    // if (error.error instanceof ErrorEvent) {
    //   // Get client-side error
    //   errorMessage = error.error.message;
    // } else {
    //   // Get server-side error
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    // }
    // window.alert(errorMessage);
    // return throwError(errorMessage);
=======
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
>>>>>>> 72e72b39c38e804b0686b7b6f420ace215daa3db
    return throwError(error)
  }
}
