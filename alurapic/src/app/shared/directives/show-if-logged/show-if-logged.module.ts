import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShowIfLoggedDirective } from './show-if-logged.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ShowIfLoggedDirective],
  exports: [ShowIfLoggedDirective]
})
export class ShowIfLoggedModule {}
