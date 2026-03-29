import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {GundamListComponent} from './components/gundam-list/gundam-list.component';
import {routes} from './app.routes';
import {SearchComponent} from './components/search/search.component';
import {AddGundamComponent} from './components/add-gundam/add-gundam.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, AddGundamComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
