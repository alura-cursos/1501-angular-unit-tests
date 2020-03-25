import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { VMessageModule } from './shared/componets/vmessage/vmessage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    VMessageModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
