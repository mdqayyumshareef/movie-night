import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    movies$: Observable<Movie[]>;

    constructor(
        private movieService: MovieService
    ) { }

    ngOnInit() {
        this.movies$ = this.movieService.getMovies();
    }

}
