import { Photo } from './../photo/photo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string): Photo[] {
    descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo =>
        photo.description
          .trim()
          .toLocaleLowerCase()
          .includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }
}
