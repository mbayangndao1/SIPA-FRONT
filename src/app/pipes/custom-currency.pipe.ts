// src/app/pipes/custom-currency.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
    name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: number): string {
    if (value == null) return '';
    // Conversion en entier sans décimale
      const formattedValue = value.toLocaleString('fr-FR');
    //const integerValue = Math.round(value);
    return `${formattedValue} F CFA`;
  }
}
