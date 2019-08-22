import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

}
