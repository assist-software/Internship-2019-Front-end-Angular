import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
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
      .subscribe(res => {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(
          res.headers.get("Authorization")
        );
        console.log(decodedToken);
      });
    // .pipe(
    //   map((res: HttpResponse<any>) => {
    //     console.log(res.headers.getAll("authorization"));
    //     // localStorage.setItem("currentUser", JSON.stringify(user));
    //     // this.currentUserSubject.next(user);
    //     // return user;
    //   })
    // );
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
          return user;
        })
      );
  }
  reset(email: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/reset-password`, email)
      .pipe(
        map(user => {
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
