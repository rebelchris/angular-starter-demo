import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL: string = 'http://www.omdbapi.com/?apikey={KEY}';

  constructor(private httpClient: HttpClient) {}

  searchMovie(name: string) {
    return this.httpClient.get<ApiResponse>(`${this.apiURL}&s=${name}`);
  }
}
