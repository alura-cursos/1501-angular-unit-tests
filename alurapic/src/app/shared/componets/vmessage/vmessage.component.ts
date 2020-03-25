import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html'
})
export class VMessageComponent {
  @Input() text = '';
}
