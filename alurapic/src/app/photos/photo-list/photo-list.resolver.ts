import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Photo } from '../photo/photo.model';
import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photo[]> {
    const username = route.params.username;
    return this.service.listFromUserPaginated(username, 1);
  }
}
