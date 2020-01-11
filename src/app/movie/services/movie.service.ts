import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Movie } from '../model/movie.model';


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private readonly rootURL: string = environment.rootURL;
    private readonly movieURL: string = this.rootURL.concat('/movie');

    constructor(
        private http: HttpClient
    ) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.movieURL);
    }

    movieDetails(id: string): Observable<Movie> {
        return this.http.get<Movie>(this.movieURL.concat(`/${id}`));
    }
}
