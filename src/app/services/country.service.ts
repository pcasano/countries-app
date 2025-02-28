import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Country} from '../country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {
  }

  /*
    getAllCountries(): Observable<Country[]> {
      return this.http.get<Country[]>(this.apiUrl);
    }
  */

  getAllCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => {
        return data.map(item => ({
          name: {
            common: item.name.common,
            official: item.name.official,
          },
          independent: item.independent,
          currencies: item.currencies,
          capital: item.capital,
          region: item.region,
          subregion: item.subregion,
          languages: item.languages,
          flag: item.flag,
          population: item.population,
          flags: item.flags,
          coatOfArms: item.coatOfArms,
        }));
      })
    );
  }

}
