import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/componets/alert/alert.service';
import { Photo } from './../photo/photo.model';

@Component({
  templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {
  photoId: number;
  photo$: Observable<Photo>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      err => {
        console.log(err);
        this.router.navigate(['not-found']);
      }
    );
  }

  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.alertService.success('Photo removed', true);
        this.router.navigate(['/user', this.userService.getUserName()], {
          replaceUrl: true
        });
      },
      err => {
        console.log(err);
        this.alertService.warning('Could not delete the photo!');
      }
    );
  }

  like(photo: Photo) {
    this.photoService.like(photo.id).subscribe(liked => {
      if (liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    });
  }
}
