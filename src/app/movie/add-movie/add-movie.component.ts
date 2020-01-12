import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { MovieService } from '../services/movie.service';
import { Movie } from '../model/movie.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

    movieForm = this.fb.group({
        name: ['', [Validators.required]],
        image: ['', [Validators.required]],
        genre: ['', [Validators.required]],
        releaseYear: ['', [Validators.required]]
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private navbarService: NavbarService,
        private movieService: MovieService
    ) {
        this.navbarService.title.next('Add Movie');
    }

    ngOnInit() {
    }

    addMovie() {
        if (this.movieForm.valid) {
            const movie: Movie = this.movieForm.value;
            this.movieService.addMovie(movie).subscribe(res => {
                this.movieForm.reset();
                this.router.navigate(['movies']);
            })
        }
    }
}
