import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/componets/vmessage/vmessage.module';

import { PhotoModule } from '../photo/photo.module';
import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailComponent } from './photo-detail.component ';
import { PhotoOwnerOnlyDirective } from './photo-owned-only/photo-owned-only.directive';

@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule,
    ShowIfLoggedModule
  ],
  exports: [PhotoDetailComponent, PhotoCommentsComponent]
})
export class PhotoDetailModule {}
