import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PhotoComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoComponent]
})
export class PhotoModule {}
