import {Component, inject, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {CommonModule} from '@angular/common';

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
  countries: any[] = [];

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(
      (data) => {
        this.countries = data;
        console.log(this.countries)
      }
    );
  }

}
