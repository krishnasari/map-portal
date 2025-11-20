import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-analysis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-analysis.html',
  styleUrl: './recent-analysis.scss',
})
export class RecentAnalysis {

  recentItems = [
    { filename: 'sample1.exe', type: 'Executable', result: 'Clean' },
    { filename: 'report.pdf', type: 'Document', result: 'Infected' },
    { filename: 'image.png', type: 'Image', result: 'Clean' },
  ];

}
