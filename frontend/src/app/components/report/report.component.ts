import { Component, OnInit } from '@angular/core';
import {GundamService} from '../../services/gundam.service';
import {Gundam} from '../../common/gundam';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-report',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {

  gundams: Gundam[] = [];
  currentDateTime: Date = new Date();
  constructor(private gundamService: GundamService) {
  }

  ngOnInit(): void {
    this.reportGundambyGrade();
  }

  reportGundambyGrade() {
    this.gundamService.getGundamListByGrade('hg').subscribe(
      data => {
        this.gundams = data;
      }
    )
  }


}


