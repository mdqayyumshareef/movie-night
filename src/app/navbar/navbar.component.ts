import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    title$ = this.navbarService.title;
    router: Router;

    constructor(
        private navbarService: NavbarService,
        private ngRouter: Router
    ) {
        this.router = ngRouter;
    }

    ngOnInit() {
    }
}