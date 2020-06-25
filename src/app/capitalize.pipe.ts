import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let firstWord = value.split(" ")[0];

    let secondWord = value.split(" ")[1];

    let newValue = firstWord.toLowerCase() + secondWord.toUpperCase();

    return newValue;
  }

}
