import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-upload-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css'],
})
export class UploadImagesComponent implements OnInit {
  selectedFiles?: FileList;
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  this.imageInfos.subscribe(
    data => {
      console.log(data);
      this.cd.detectChanges(); // Change Detection'ı manuel olarak tetikle
    },
    error => console.error('Error in imageInfos:', error)
  );
  }
  selectFiles(event: any): void {
    this.message = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  upload(file: File): void {
    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            const msg = file.name + ': Successful!';
            this.message.push(msg);
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          let msg = file.name + ': Failed!';

          if (err.error && err.error.message) {
            msg += ' ' + err.error.message;
          }

          this.message.push(msg);
          this.imageInfos = this.uploadService.getFiles();
        },
      });
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(this.selectedFiles[i]);
      }
      this.selectedFiles = undefined;
    }
  }
  getBlobUrl(blob: Blob): string {
    // Blob nesnesinden URL'yi alma
    return window.URL.createObjectURL(blob);
  }
  
  getBlobName(blob: Blob): string {
    if (blob instanceof File) {
      // Eğer Blob nesnesi bir File nesnesiyse, dosya adını al
      return blob.name;
    } else {
      // Eğer Blob nesnesi bir File değilse, özel bir ad kullan veya boş bir string döndür
      return 'UnknownFileName';
    }
  }
  
  
}
