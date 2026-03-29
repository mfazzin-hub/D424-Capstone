import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {GundamListComponent} from './components/gundam-list/gundam-list.component';
import {routes} from './app.routes';
import {SearchComponent} from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
