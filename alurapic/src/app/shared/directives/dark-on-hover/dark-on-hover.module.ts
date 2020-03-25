import { CommonModule } from '@angular/common';
import { DarkOnHoverDirective } from './dark-on-hover.directive';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [DarkOnHoverDirective],
  exports: [DarkOnHoverDirective]
})
export class DarkOnHoverModule {}
