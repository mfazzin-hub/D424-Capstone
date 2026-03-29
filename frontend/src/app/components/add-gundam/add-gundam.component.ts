import { Component } from '@angular/core';
import {GundamService} from '../../services/gundam.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gundam',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-gundam.component.html',
  styleUrl: './add-gundam.component.css'
})
export class AddGundamComponent {

  constructor(private gundamService: GundamService,
              private router: Router) {
  }

  gundam = {
    name: '',
    grade: '',
    release_year: null,
    series: '',
    box_art: ''
  };

  addGundam() {
    this.gundamService.createGundam(this.gundam).subscribe({
      next: (res) => {
        this.router.navigate(['/gundams'])
      }
    })
  }
}
