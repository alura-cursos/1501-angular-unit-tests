import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { PhotoComment } from './photo-comments.model';
import { Photo } from './photo.model';

const API = environment.ApiURL;
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(username: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${API}/${username}/photos`);
  }

  listFromUserPaginated(username: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Photo[]>(`${API}/${username}/photos`, { params });
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);
    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true
    });
  }

  findById(photoId: number) {
    return this.http.get<Photo>(`${API}/photos/${photoId}`);
  }

  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(`${API}/photos/${photoId}/comments`);
  }

  addComments(photoId: number, commentText: string) {
    return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
  }

  removePhoto(photoId: number) {
    return this.http.delete(`${API}/photos/${photoId}`);
  }

  like(photoId: number) {
    return this.http
      .post(`${API}/photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(map(res => true))
      .pipe(
        catchError(err => {
          return err.status == '304' ? of(false) : throwError(err);
        })
      );
  }
}
