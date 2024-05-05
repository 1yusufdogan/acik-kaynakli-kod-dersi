import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl = 'https://localhost:44333/api/File';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload/`+sessionStorage["currentuserID"], formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/files`, { responseType: 'blob' }).pipe(
      catchError((error: any) => {
        console.error('Error in getFiles:', error);
        return throwError(error);
      })
    ) as Observable<Blob>;
  }

  getFile(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/files/`+sessionStorage["currentuserID"], { responseType: 'blob' }).pipe(
      catchError((error: any) => {
        console.error('Error in getFiles:', error);
        return throwError(error);
      })
    ) as Observable<Blob>;
  }
}

