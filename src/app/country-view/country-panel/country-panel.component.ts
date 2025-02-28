import {Component, Input} from '@angular/core';
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


}
