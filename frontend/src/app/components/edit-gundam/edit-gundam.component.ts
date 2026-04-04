import { Component } from '@angular/core';
import {GundamService} from '../../services/gundam.service';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-edit-gundam',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './edit-gundam.component.html',
  styleUrl: './edit-gundam.component.css'
})
export class EditGundamComponent {
  gundam = {
    id: 0,
    name: '',
    grade: '',
    release_year: 0,
    series: '',
    box_art: ''
  };
  errorMessage: string = '';

  constructor(private gundamService: GundamService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.gundamService.getGundam(id).subscribe(data => {
      this.gundam = {
        ...data,
        id: +data.id,
        release_year: +data.release_year
      };
    });
  }

  editGundam() {
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

    this.gundamService.updateGundam(this.gundam).subscribe({
      next: (res) => {
        this.router.navigate(['/gundams'])
      }
    })
  }
}
