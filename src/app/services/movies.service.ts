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


    // trimitere film pentru editare
    private movieSource = new Subject<Movie>();
    currentMovie = this.movieSource.asObservable();


    private numberMovie = new Subject<number>();
    currentNumber = this.numberMovie.asObservable();
    testArray: any[] = [];

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

    editMovie(value) {
        let token = localStorage.getItem('token');
        token = token.slice(1, -1);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token,
        });
        console.log(value.id);
        // const id = 1000;
        return this.http.put(`${environment.movieUrl}/api/movie/${value.id}`, value, { headers });
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

    movieSendToEdit(value) {
        this.movieSource.next(value);
    }

    addMovieToWhatchlist(value) {

        const retrieveObject = localStorage.getItem('movieWhatchlist');
        if (retrieveObject === 'null') {
            const arrayMovie = [];
            arrayMovie.push(value);
            localStorage.setItem('movieWhatchlist', JSON.stringify(arrayMovie));
            this.numberMovieWhatchlist(arrayMovie.length);
            return true;
        } else {
            const arrayMovie = JSON.parse(retrieveObject);
            if (arrayMovie === 0) {
                console.log('am intrat in if');
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
            } else {
                arrayMovie.push(value);
                console.log(value);
                localStorage.setItem('movieWhatchlist', JSON.stringify(arrayMovie));
                this.numberMovieWhatchlist(arrayMovie.length);
                return true;
            }
        }
    }
}
