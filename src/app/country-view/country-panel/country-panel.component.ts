import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CountryCardComponent} from '../country-card/country-card.component';
import {Country} from '../country.model';

@Component({
  selector: 'app-country-panel',
  imports: [
    CountryCardComponent
  ],
  templateUrl: './country-panel.component.html',
  styleUrl: './country-panel.component.scss'
})
export class CountryPanelComponent {

  @Input() countries!: Country[];

  @Output() selectedCountryChange = new EventEmitter<Country>();

  selectedCountry: Country | null = null;

  onCardClick(country: Country) {
    this.selectedCountry = country;
    this.selectedCountryChange.emit(country);
  }
}
