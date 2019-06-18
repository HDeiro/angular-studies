import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(' ').reduce((output, partial) => 
      output + ' ' + this.capitalize(partial), "");
  }

  capitalize(value: string): string {
    return value[0].toUpperCase() 
      + value.substring(1).toLocaleLowerCase()
  }
}
