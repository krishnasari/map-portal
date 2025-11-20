import { Component, computed, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { LatestReports } from './components/latest-reports/latest-reports';
import { Status } from './components/status/status';
import { FilesAnalyzed } from './components/files-analyzed/files-analyzed';
import { RecentAnalysis } from './components/recent-analysis/recent-analysis';
import { UploadFile } from '../pages/upload-file/upload-file';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DashboardComponent implements OnDestroy {
  currentUrl = signal(''); // initialize empty first
  isHomePage = computed(() =>
    this.currentUrl().endsWith('/home') || this.currentUrl() === '/dashboard'
  );

  isUploadPage = computed(() =>
    this.currentUrl().endsWith('/upload') 
  );


  private routerSub!: Subscription; // will initialize in constructor

  constructor(private router: Router) {
    // Set initial value AFTER router is available
    this.currentUrl.set(this.router.url);

    // Update signal on navigation
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(event.urlAfterRedirects);
      }
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
