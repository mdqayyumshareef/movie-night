import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

    editMovieID: string;

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
        private movieService: MovieService,
        private route: ActivatedRoute
    ) {
        this.editMovieID = this.route.snapshot.paramMap.get('id');
        let title: string = '';
        title = this.editMovieID ? 'Edit Movie' : 'Add Movie';
        this.navbarService.title.next(title);
    }

    ngOnInit() {
        if (this.editMovieID) {
            this.movieService.movieDetails(this.editMovieID)
                .subscribe(res => {
                    this.movieForm.setValue({
                        name: res.name,
                        image: res.image,
                        genre: res.genre,
                        releaseYear: res.releaseYear
                    });
                });
        }
    }

    submitMovieForm() {
        if (this.movieForm.valid) {
            const movie: Movie = this.movieForm.value;
            if (this.editMovieID) {
                this.updateMovie(movie);
                return;
            }
            this.addNewMovie(movie);
        }
    }

    private addNewMovie(movie: Movie) {
        this.movieService.addMovie(movie).subscribe(res => {
            this.movieForm.reset();
            this.router.navigate(['movies']);
        });
    }

    private updateMovie(movie: Movie) {
        this.movieService.updateMovie(this.editMovieID, movie)
            .subscribe(res => {
                this.movieForm.reset();
                this.router.navigate(['movies', this.editMovieID, 'details']);
            });
    }
}
