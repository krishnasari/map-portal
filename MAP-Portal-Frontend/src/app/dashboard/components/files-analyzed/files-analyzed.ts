import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-files-analyzed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './files-analyzed.html',
  styleUrls: ['./files-analyzed.scss'],
})
export class FilesAnalyzed {
  
  totalFiles = 128;
  infectedFiles = 12;
  cleanFiles = 116;

}
