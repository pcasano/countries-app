import {Component, Input} from '@angular/core';
import {Country} from '../country.model';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {

  @Input() country!: Country;


}
