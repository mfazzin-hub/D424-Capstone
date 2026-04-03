import { Component } from '@angular/core';
import {GundamService} from '../../services/gundam.service';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-gundam',
  imports: [
    FormsModule
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
    this.gundamService.updateGundam(this.gundam).subscribe({
      next: (res) => {
        this.router.navigate(['/gundams'])
      }
    })
  }
}
