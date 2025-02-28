import {Component, inject, OnInit} from '@angular/core';
import {CountryService} from './country-view/services/country.service';
import {CommonModule} from '@angular/common';
import {Country} from './country-view/country.model';
import {CountryPanelComponent} from './country-view/country-panel/country-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CountryPanelComponent],
  providers: [CountryService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private countryService = inject(CountryService);
  countries: Country[] = [];

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(
      (value: Country[]) => {
        this.countries = value;

        console.log(this.countries[1])
      }
    );


  }

}
