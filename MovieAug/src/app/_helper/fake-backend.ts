import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

import { User } from "@app/_models";

const users: User[] = [
  { id: 1, email: "test@test.test", password: "testtest", name: "Test" }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/users/authenticate") && method === "POST":
          return authenticate();
        case url.endsWith("/users") && method === "GET":
          return getUsers();
        case url.endsWith("/create"):
          return createUser();
        case url.endsWith("/reset"):
          return resetPassword();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { email, password } = body;
      const user = users.find(
        x => x.email === email && x.password === password
      );
      if (!user) return error("Email or password is incorrect");
      return ok({
        id: user.id,
        email: user.email,
        name: user.name,
        token: "fake-jwt-token"
      });
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: "Unauthorised" } });
    }

    function isLoggedIn() {
      return headers.get("Authorization") === "Bearer fake-jwt-token";
    }
    function createUser() {
      const { fullName, password, email } = body;
      const user = users.find(x => x.email === email);
      if (user) return error("Email already used");
      const newId = users[users.length - 1].id;
      const test = {
        id: newId + 1,
        email: email,
        password: password,
        name: fullName
      };
      users.push(test);
      console.log(users);
      return ok({ result: true });
    }
    function resetPassword() {
      const { email } = body;
      const user = users.find(x => x.email == email);
      if (user) return ok({ result: true });
      return error("Email not found");
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
