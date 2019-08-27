import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { movie } from "../shared/movie";
import { user } from "../shared/user";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class RestApiService {
  apiUserDB = 'http://192.168.151.218:8090/user';
  apiUserDBEdit = 'http://192.168.151.193:8080/api/movie';
  apiServer = 'http://192.168.151.218:8090'
  // apiUserDBSignUP = 'http://192.168.151.193:8080/signup';
  apiURLDB = 'http://192.168.151.193:8080/api/movie';
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  getMovies(): Observable<any> {
    console.log("Am intrat in server");
    return this.http
      .get<any>(this.apiURLDB)

      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getMovie(id): Observable<any> {
    return this.http.get<any>(this.apiURLDB + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getUser(id): Observable<any> {
    return this.http.get<any>(this.apiUserDB + "/" + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  deleteMovie(id) {
    return this.http.delete<any>(this.apiURLDB + "/" + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  createMovie(movie): Observable<any> {
    return this.http
      .post<any>(this.apiURLDB, JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateMovie(id, movie): Observable<movie> {
    return this.http.put<movie>(this.apiUserDBEdit + '/' + id, JSON.stringify(movie), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateUser(id, user): Observable<any> {
    return this.http.put<any>(this.apiUserDBEdit + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  // Error handling
  handleError(error) {
    return throwError(error);
  }
}
