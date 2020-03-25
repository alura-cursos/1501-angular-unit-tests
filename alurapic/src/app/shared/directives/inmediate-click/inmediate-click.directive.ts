import { Directive, ElementRef, OnInit } from '@angular/core';

import { PlatformDetectorService } from './../../../core/platform-detector/platform-detector.service';

@Directive({ selector: '[inmediateClick]' })
export class InmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser &&
      this.element.nativeElement.click();
  }
}
