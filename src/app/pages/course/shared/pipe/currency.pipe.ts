import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name: 'dollarPrefix'})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (value == null) {
      return '$ 0'
    } else {

      return `$ ${value.toFixed(2)}`;
    }

  }
}
