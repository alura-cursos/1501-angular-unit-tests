import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InmediateClickDirective } from './inmediate-click.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InmediateClickDirective],
  exports: [InmediateClickDirective]
})
export class InmediateClickModule {}
