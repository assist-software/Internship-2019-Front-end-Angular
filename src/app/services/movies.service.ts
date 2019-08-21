import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable()

export class MoviesServices {
    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${environment.movieUrl}/api/movie/`);
    }

}
