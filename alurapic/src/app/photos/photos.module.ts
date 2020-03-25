import { NgModule } from '@angular/core';

import { PhotoDetailModule } from './photo-detail/photo-detail.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
  imports: [PhotoModule, PhotoFormModule, PhotoListModule, PhotoDetailModule]
})
export class PhotosModule {}
