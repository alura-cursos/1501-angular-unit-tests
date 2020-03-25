import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  imports: [CommonModule],
  exports: [LoadingComponent],
  declarations: [LoadingComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class LoadingModule {}
