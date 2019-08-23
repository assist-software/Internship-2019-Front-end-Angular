import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()

export class MoviesServices {
    private messageSource = new Subject<Movie>();
    currentMessage = this.messageSource.asObservable();


    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${environment.movieUrl}/api/movie/`);
    }

    postMovie(value) {

        // const headers = new HttpHeaders({
        //     Authorization: token;
        // });
        // return this.http.post(`${environment.movieUrl}/api/movie/`, { value }, { headers });
        return this.http.post(`${environment.movieUrl}/api/movie/`, value);

    }

    deleteMovie(id) {
        return this.http.delete(`${environment.movieUrl}/api/movie/id`, id);
    }

    changeMessage(message: Movie) {
        this.messageSource.next(message);
    }

}
