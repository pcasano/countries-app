import {Component, inject, OnInit} from '@angular/core';
import {CountryService} from './country-view/services/country.service';
import {CommonModule} from '@angular/common';
import {Country} from './country-view/country.model';
import {CountryPanelComponent} from './country-view/country-panel/country-panel.component';
import {FilterAreaComponent} from './filter-area/filter-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CountryPanelComponent, FilterAreaComponent],
  providers: [CountryService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private countryService = inject(CountryService);
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  receivedCountryName: string = '';

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
    this.filteredCountries = this.countries.filter(country =>
      country.name.common.toLowerCase().startsWith(this.receivedCountryName.toLowerCase())
    );
  }
}
