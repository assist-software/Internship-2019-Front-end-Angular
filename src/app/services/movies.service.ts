import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()

export class MoviesServices {
    private messageSource = new BehaviorSubject('');
    currentMessage = this.messageSource.asObservable();


    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${environment.movieUrl}/api/movie/`);
    }

    changeMessage(message: any) {
        this.messageSource.next(message);
    }

}
