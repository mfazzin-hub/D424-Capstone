import {Component, OnInit} from '@angular/core';
import {GundamService} from '../../services/gundam.service';
import {Gundam} from '../../common/gundam';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-gundam-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gundam-list.component.html',
  styleUrl: './gundam-list.component.css'
})
export class GundamListComponent implements OnInit {

  gundams: Gundam[] = [];
  searchMode: boolean = false;
  constructor(private gundamService: GundamService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listGundam();
    });
  }

  private listGundam() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword')

    if (this.searchMode) {
      this.handleSearchGundam();
    }
    else {
      this.handleListGundam();
    }

  }

  handleListGundam() {
    this.gundamService.getGundamList().subscribe(
      data => {
        this.gundams = data;
      }
    )
  }

  handleSearchGundam() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.gundamService.searchGundams(theKeyword).subscribe(
      data => {
        this.gundams = data;
      }
    )

  }

  handleDeleteGundam(id: number) {
    console.log(id)
    this.gundamService.deleteGundam(id).subscribe({
      next: () => {
        this.listGundam();
      }
    });
  }
}
