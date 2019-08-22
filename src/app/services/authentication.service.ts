import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


import { User } from '../models/user.model';
// import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  private currentUser: Observable<User>;

  constructor(
    public http: HttpClient,
    public jwtHelper: JwtHelperService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('curentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/signin`, { email, password }, { observe: 'response' })
      .pipe(
        map((res: HttpResponse<any>) => {
          const token = res.headers.get('Authorization');
          const user = email;
          if (token) {
            localStorage.setItem('token', JSON.stringify(token));
            // this.currentUserSubject.next(user);
          }
          return res;
        })
      );
  }

  public logout() {
    // sterge user din local storage
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
