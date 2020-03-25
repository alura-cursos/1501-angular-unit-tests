import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from 'src/app/shared/componets/vmessage/vmessage.module';

import { PhotoModule } from '../photo/photo.module';
import { InmediateClickModule } from './../../shared/directives/inmediate-click/inmediate-click.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    PhotoModule,
    InmediateClickModule
  ]
})
export class PhotoFormModule {}
