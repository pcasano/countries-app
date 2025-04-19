import {Component, input, output} from '@angular/core';
import {Country} from '../country-view/country.model';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-country-details',
  imports: [
    DecimalPipe
  ],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent {

  country = input.required<Country>();

  closeDetails = output<boolean>();

  onClose() {
    this.closeDetails.emit(true);
  }

  getLanguageList() {
    console.log(this.country().languages);
    return Object.values(this.country().languages);
  }

  getCurrencyList() {
    return Object.entries(this.country().currencies).map(
      ([code, currency]) => `${currency.name} (${currency.symbol})`
    );
  }
}
