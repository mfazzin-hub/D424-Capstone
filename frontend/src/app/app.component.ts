import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {GundamListComponent} from './components/gundam-list/gundam-list.component';
import {routes} from './app.routes';
import {SearchComponent} from './components/search/search.component';
import {AddGundamComponent} from './components/add-gundam/add-gundam.component';
import {filter} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'frontend';
  public isLoginPage: boolean = false;

  constructor(public router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.urlAfterRedirects === '/login';
    });
  }

}
