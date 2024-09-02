import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})

export class CountriesService {
  //private apiURL: string = 'https://restcountries.com/v3.1'
  private apiURL: string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }

  searchCapital( term: string ):Observable<Country[]> {
    const url = `${ this.apiURL }/capital/${ term }`
    return this.httpClient.get<Country[]>( url );
  }
}
