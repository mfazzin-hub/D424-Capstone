import { Component } from '@angular/core';
import {GundamService} from '../../services/gundam.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-gundam',
  imports: [FormsModule, RouterLink, NgIf],
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
  errorMessage: string = '';

  addGundam() {
    this.errorMessage = '';

    if (
      !this.gundam.name ||
      !this.gundam.grade ||
      !this.gundam.series ||
      !this.gundam.release_year
    ) {
      this.errorMessage = 'All fields are required';
      return;
    }

    const year = Number(this.gundam.release_year);

    if (isNaN(year)) {
      this.errorMessage = 'Release year must be a number';
      return;
    }

    if (year < 1000 || year > 9999) {
      this.errorMessage = 'Release year must be a 4-digit number';
      return;
    }

    this.gundamService.createGundam(this.gundam).subscribe({
      next: (res) => {
        this.router.navigate(['/gundams'])
      }
    })
  }
}
