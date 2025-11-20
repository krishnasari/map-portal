import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-reports.html',
  styleUrls: ['./latest-reports.scss'],
})
export class LatestReports {

  reports = [
    { id: 1, file: 'sample1.exe', date: '2025-11-18', result: 'Clean' },
    { id: 2, file: 'report.pdf', date: '2025-11-17', result: 'Infected' },
    { id: 3, file: 'archive.zip', date: '2025-11-16', result: 'Clean' },
  ];

}
