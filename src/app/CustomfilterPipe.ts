import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {
  transform(values: any, filterString: string, propname: string): any {
    if (values.length === 0) {
      return values;
    }
    const retvals = [];
    values.forEach(element => {
      if (element[propname] === filterString) {
        retvals.push(element);
      }
    });
    return retvals;
  }
}
