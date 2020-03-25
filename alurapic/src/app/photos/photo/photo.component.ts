import { Component, Input, OnInit } from '@angular/core';

import { environment } from './../../../environments/environment';

const API_URL = environment.ApiURL;
const CLOUD = `${API_URL}/imgs/`;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  private _url = '';

  @Input()
  description = '';
  @Input()
  set url(url: string) {
    if (url.startsWith('data')) {
      this._url = url;
    } else {
      this._url = CLOUD + url;
    }
  }

  get url() {
    return this._url;
  }

  ngOnInit() {}
}
