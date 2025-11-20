import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-file.html',
  styleUrls: ['./upload-file.scss'],
})
export class UploadFile {

selectedFile: File | null = null;
  isUploading = false;
  progress = 0;
  message = '';

  constructor(private http: HttpClient) {}

  // Handle file selection
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.progress = 0;  // Reset progress bar
    this.message = '';   // Reset message
  }

  // Start file upload
  onUpload(): void {
    if (!this.selectedFile) {
      this.message = 'Please select a file first.';
      return;
    }

    this.isUploading = true;

  }

  // file upload request
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const uploadReq = new HttpRequest(
      'POST',
      'API_URL/upload', // For backend API URL
      formData,
      {
        headers: new HttpHeaders(),
        reportProgress: true,
      }
    );

    return this.http.request(uploadReq).pipe(
      catchError((err) => {
        return of({ type: HttpEventType.Response, body: err });
      })
    );
  }
}
