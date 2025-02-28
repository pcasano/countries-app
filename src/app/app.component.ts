import {Component, inject, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {CommonModule} from '@angular/common';
import {Country} from './country.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
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
