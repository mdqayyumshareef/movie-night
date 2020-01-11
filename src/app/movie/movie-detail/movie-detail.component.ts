import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie.model';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

    id: string;
    movie: Movie;

    constructor(
        private service: MovieService,
        private route: ActivatedRoute,
        private navbarService: NavbarService
    ) {
        this.id = route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.service.movieDetails(this.id)
            .subscribe(movie => {
                this.movie = movie;
                this.navbarService.title.next(movie.name);
            });
    }
}