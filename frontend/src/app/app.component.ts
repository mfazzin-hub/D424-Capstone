import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GundamListComponent} from './components/gundam-list/gundam-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GundamListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
