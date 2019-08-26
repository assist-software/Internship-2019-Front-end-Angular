import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    helper = new JwtHelperService();

    constructor(
        private router: Router,
        public auth: AuthenticationService
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = localStorage.getItem('token');
        // decodez token
        const decodedToken = this.helper.decodeToken(token);
        if (token) {
            if (this.auth.isAuthenticated()) {
                if (decodedToken.rol[0] === 'Admin') {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return true;
                }
            } else {
                this.router.navigate(['/']);
                return false;
            }
        } else {
            this.router.navigate(['/']);
        }
    }
}
