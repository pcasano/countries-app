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

  @Output() selectedContinentsChange = new EventEmitter<string[]>();

  @Output() isIndependentChange = new EventEmitter<boolean | null>();

  @Output() isSortedAlphabeticallyAscendant = new EventEmitter<boolean>();

  @Output() isSortedPopulationAscendant = new EventEmitter<boolean>();

  countryName: string = '';
  selectedContinents: string[] = [];
  isIndependent: boolean | null = null;
  isSortedAlphabeticallyButtonVisible: boolean = true;
  isSortedPopulationButtonVisible: boolean = true;

  continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctica'];

  onContinentChange(event: Event) {
    const selectedOptions = (event.target as HTMLSelectElement).selectedOptions;
    this.selectedContinents = Array.from(selectedOptions).map(option => option.value);
    this.selectedContinentsChange.emit(this.selectedContinents);
  }

  onNameChange() {
    this.countryNameChange.emit(this.countryName);
  }

  onIndependentChange() {
    this.isIndependentChange.emit(this.isIndependent);
  }

  onSortByNameAscendant() {
    this.isSortedAlphabeticallyButtonVisible = false;
    this.isSortedAlphabeticallyAscendant.emit(true)
  }

  onSortByNameDescendant() {
    this.isSortedAlphabeticallyButtonVisible = true;
    this.isSortedAlphabeticallyAscendant.emit(false)
  }

  onSortByPopulationAscendant() {
    this.isSortedPopulationButtonVisible = false;
    this.isSortedPopulationAscendant.emit(true)
  }

  onSortByPopulationDescendant() {
    this.isSortedPopulationButtonVisible = true;
    this.isSortedPopulationAscendant.emit(false)
  }
}
