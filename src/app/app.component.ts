import {Component, inject, OnInit} from '@angular/core';
import {CountryService} from './country-view/services/country.service';
import {CommonModule} from '@angular/common';
import {Country} from './country-view/country.model';
import {CountryPanelComponent} from './country-view/country-panel/country-panel.component';
import {FilterAreaComponent} from './filter-area/filter-area.component';
import {CountryDetailsComponent} from './country-details/country-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CountryPanelComponent, FilterAreaComponent, CountryDetailsComponent],
  providers: [CountryService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private countryService = inject(CountryService);

  countries: Country[] = [];
  filteredCountries: Country[] = [];
  continents: string[] = [];

  receivedCountryName: string = '';
  receivedIsIndependent: boolean | null = null;
  receivedSelectedCountry: Country | null = null;

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(
      (value: Country[]) => {
        this.countries = value;
        this.filteredCountries = value;

      }
    );
  }

  handleCountryNameChange(newName: string) {
    this.receivedCountryName = newName;
    this.filterCountries();
  }

  handleContinentChange(selectedContinents: string[]) {
    this.continents = selectedContinents;
    this.filterCountries();
  }

  handleIndependenceChange(isIndependent: boolean | null) {
    this.receivedIsIndependent = isIndependent;
    this.filterCountries();
  }

  filterCountries() {
    this.filteredCountries = this.countries.filter(country => {
      const nameMatches = country.name.common.toLowerCase().startsWith(this.receivedCountryName.toLowerCase());
      const independenceMatches = this.receivedIsIndependent === null || country.independent === this.receivedIsIndependent;
      const continentMatches = this.continents.length === 0 || this.continents.includes(country.region);
      return nameMatches && independenceMatches && continentMatches;
    });
  }

  handleCountrySelection(selectedCountry: Country) {
    this.receivedSelectedCountry = selectedCountry;
  }

  handleCloseDetails() {
    this.receivedSelectedCountry = null;
  }
}
