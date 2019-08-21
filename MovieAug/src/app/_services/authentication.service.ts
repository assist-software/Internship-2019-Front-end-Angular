import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "@environments/environment";
import { User } from "@app/_models";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(
        `${environment.apiUrl}/signin`,
        { email: email, password: password },
        { observe: "response" }
      )
      .pipe(
        map(res => {
          const jwtToken = res.headers.get("Authorization");
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(jwtToken);
          const user = new User(
            decodedToken.id,
            email,
            decodedToken.sub,
            jwtToken.substr(7)
          );
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );

    // .subscribe(res => {
    //   const jwtToken = res.headers.get("Authorization");
    //   const helper = new JwtHelperService();

    //   const decodedToken = helper.decodeToken(jwtToken);
    //   return { name: decodedToken.sub, email: email, token: jwtToken };
    // });

    // map(res => {
    //   console.log(res);
    //   console.log(res.headers.get("Authorization"));
    // localStorage.setItem("currentUser", JSON.stringify(user));
    // this.currentUserSubject.next(user);
    // return user;
  }
  register(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    return this.http
      .post<any>(`${environment.apiUrl}/signup`, {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm
      })
      .pipe(
        map(user => {
          console.log(user);
          return user;
        })
      );
  }
  reset(email: string) {
    return this.http.post<any>(`${environment.apiUrl}/reset-password`, email);
  }
  // reset(email: string) {
  //   const headers = new HttpHeaders();
  //   headers.append("Content-Type", "text/plain");
  //   return this.http
  //     .post<any>(`${environment.apiUrl}/reset-password`, email, {
  //       headers: headers
  //     });
  // }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
