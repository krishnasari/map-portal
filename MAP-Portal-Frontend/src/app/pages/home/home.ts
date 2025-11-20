import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecentAnalysis } from '../../dashboard/components/recent-analysis/recent-analysis';
import { FilesAnalyzed } from '../../dashboard/components/files-analyzed/files-analyzed';
import { LatestReports } from '../../dashboard/components/latest-reports/latest-reports';
import { Status } from '../../dashboard/components/status/status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [RecentAnalysis, FilesAnalyzed, Status, LatestReports],
})
export class Home {
  constructor(private router: Router) {}

  // Determine if it's the home page
  isHomePage() {
    return this.router.url === '/dashboard' || this.router.url === '/dashboard/home';
  }
}
