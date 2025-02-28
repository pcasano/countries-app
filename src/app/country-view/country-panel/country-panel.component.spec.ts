import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPanelComponent } from './country-panel.component';

describe('CountryPanelComponent', () => {
  let component: CountryPanelComponent;
  let fixture: ComponentFixture<CountryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
