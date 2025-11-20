import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.html',
  styleUrls: ['./status.scss'],
})
export class Status {

  systemStatus = {
    cpu: 'Normal',
    memory: '72% Used',
    queue: '3 scans pending',
    uptime: '12 hours 15 mins'
  };

}
