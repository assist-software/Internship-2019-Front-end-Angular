import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { decode } from 'punycode';


// import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(email: string, password: string, confirmPassword: string, name: string) {
        return this.http.post(`${environment.apiUrl}/signup`, { email, password, confirmPassword, name });
    }

    resetPassword(email: string) {
        return this.http.post(`${environment.apiUrl}/reset-password`, { email });
    }

    userDetails() {
        const helper = new JwtHelperService();
        // preluare din local storage
        const localToken = localStorage.getItem('token');
        const token = JSON.parse(localToken);
        console.log(token);

        // decodare token
        const decodedToken = helper.decodeToken(token);
        console.log('decodare token', decodedToken);
        // return this.http.post(`${environment.movieUrl}/api/user`, { email });
        return decodedToken;
    }

}
