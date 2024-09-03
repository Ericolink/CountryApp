import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {
  //private apiURL: string = 'https://restcountries.com/v3.1'
  private apiURL: string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiURL}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError(() => of(null))
      );
  }

  searchCapital( term: string ):Observable<Country[]> {
    const url = `${ this.apiURL }/capital/${ term }`
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError( () => of ([]) )
    );
  }
  searchCountry( term: string):Observable<Country[]> {
    const url = `${ this.apiURL }/name/${ term }`
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError( () => of ([]) )
    );
  }
  searchRegion( term: string):Observable<Country[]> {
    const url = `${ this.apiURL }/region/${ term }`
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError( () => of ([]) )
    );
  }
}
