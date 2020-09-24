import { UserService } from './../../../core/user/user.service';
import { Photo } from './../../photo/photo.model';
import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[photoOwnerOnly]' })
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto: Photo;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (!user || user.id !== this.ownedPhoto.userId) {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}
