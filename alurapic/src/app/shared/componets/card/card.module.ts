import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
  imports: [CommonModule],
  exports: [CardComponent],
  declarations: [CardComponent]
})
export class CardModule { }
