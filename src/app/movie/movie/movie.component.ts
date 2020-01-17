import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

    @Input() movie: Movie;

    constructor(
        private movieService: MovieService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onDelete() {
        this.movieService.deleteMovie(this.movie._id)
            .subscribe(res => {
                this.router.navigate(['movies']);
            });
    }
}
