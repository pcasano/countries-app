import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter-area',
  imports: [
    FormsModule
  ],
  templateUrl: './filter-area.component.html',
  styleUrl: './filter-area.component.scss'
})
export class FilterAreaComponent {

  @Output() countryNameChange = new EventEmitter<string>();

  countryName: string = '';
  selectedContinents: string[] = [];
  isIndependent: boolean | null = null;

  continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctica'];

  onContinentChange(event: Event) {
    const selectedOptions = (event.target as HTMLSelectElement).selectedOptions;
    this.selectedContinents = Array.from(selectedOptions).map(option => option.value);
  }

  onNameChange() {
    this.countryNameChange.emit(this.countryName);
  }
}
