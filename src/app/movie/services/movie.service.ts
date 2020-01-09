import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { movies } from '../model/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor() { }

    getMovies() {
        return of(movies);
    }

    movieDetails(id: number) {
        return of(
            movies.find(movie => movie.id === id)
        );
    }
}
