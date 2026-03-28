import {Component, OnInit} from '@angular/core';
import {GundamService} from '../../services/gundam.service';
import {Gundam} from '../../common/gundam';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-gundam-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gundam-list.component.html',
  styleUrl: './gundam-list.component.css'
})
export class GundamListComponent implements OnInit {

  gundams: Gundam[] = [];
  constructor(private gundamService: GundamService) {}

  ngOnInit(): void {
    this.listGundam();
  }

  private listGundam() {
    this.gundamService.getGundamList().subscribe(
      data => {
        this.gundams = data;
      }
    )
  }
}
