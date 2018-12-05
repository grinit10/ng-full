import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  'name': 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform = (value: string, limit: number) =>  value.length > limit ? (value.substr(0, limit) + '...') : value;
}
