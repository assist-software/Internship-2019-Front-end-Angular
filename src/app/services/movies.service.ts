import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../models/movie.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class MoviesServices {
    // pentru numarul filmelor
    private messageSource = new Subject<Movie>();
    currentMessage = this.messageSource.asObservable();

    private numberMovie = new Subject<number>();
    currentNumber = this.numberMovie.asObservable();


    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${environment.movieUrl}/api/movie/`);
    }

    getMovie(id): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${environment.movieUrl}/api/movie/${id}`);
    }


    getCategory(): Observable<any> {
        return this.http.get<any>(`${environment.movieUrl}/api/category`);
    }

    postMovie(value) {
        let token = localStorage.getItem('token');
        token = token.slice(1, -1);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token,
        });
        return this.http.post(`${environment.movieUrl}/api/movie/`, value, { headers });
    }

    deleteMovie(id) {
        let token = localStorage.getItem('token');
        token = token.slice(1, -1);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token,
        });
        return this.http.delete(`${environment.movieUrl}/api/movie/${id}`, { headers });
    }

    changeMessage(message: Movie) {
        this.messageSource.next(message);
    }

    numberMovieWhatchlist(value: number) {
        this.numberMovie.next(value);
    }

    addMovieToWhatchlist(value) {

        const retrieveObject = localStorage.getItem('movieWhatchlist');
        const arrayMovie = JSON.parse(retrieveObject);

        if (
            arrayMovie.some(
                movie => {
                    return movie.id === value.id && movie.name === value.name;
                })
        ) {
            return false;
        } else {
            arrayMovie.push(value);
            localStorage.setItem('movieWhatchlist', JSON.stringify(arrayMovie));
            this.numberMovieWhatchlist(arrayMovie.length);
            return true;
        }
    }
}
