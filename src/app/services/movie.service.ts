import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Responsible for the api calls.
 */
export class MovieService {

  constructor(private http:HttpClient) { }

  apiBaseUrl = 'https://api.themoviedb.org/3';
  apiKey = '1bf6d24beb8b99101d0ae2e3af4196b6';

  /**
   * Fetches the trending movies of the week from the API.
   * @returns An observable of the API response.
   */
  trendingApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }

  /**
   * Fetches the trending movies of the day from the API for the banner.
   * @returns An observable of the API response.
   */
  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  /**
   * Fetches popular movies from the API.
   * @returns An observable of the API response.
   */
  popularApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  /**
   * Fetches top-rated movies from the API.
   * @returns An observable of the API response.
   */
  topRatedApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/top_rated?api_key=${this.apiKey}`);
  }

  /**
   * Fetches details of a specific movie from the API.
   * @param id - The ID of the movie.
   * @returns An observable of the API response.
   */
  getMovieDetails(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  /**
   * Fetches credits of a specific movie from the API.
   * @param id - The ID of the movie.
   * @returns An observable of the API response.
   */
  getMovieCredits(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  /**
   * Fetches streaming providers for a specific movie from the API.
   * @param id - The ID of the movie.
   * @returns An observable of the API response.
   */
  getMovieProviders(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/${id}/watch/providers?api_key=${this.apiKey}`);
  }

  /**
   * Fetches details of a specific TV series from the API.
   * @param id - The ID of the TV series.
   * @returns An observable of the API response.
   */
  getSeriesDetails(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  /**
   * Fetches credits of a specific TV series from the API.
   * @param id - The ID of the TV series.
   * @returns An observable of the API response.
   */
  getSeriesCredits(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  /**
   * Fetches streaming providers for a specific TV series from the API.
   * @param id - The ID of the TV series.
   * @returns An observable of the API response.
   */
  getSeriesProviders(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/watch/providers?api_key=${this.apiKey}`);
  }

  /**
   * Performs a search for movies, TV series, and people based on the given query.
   * @param data - The search parameters.
   * @returns An observable of the API response.
   */
  search(data:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/search/multi?api_key=${this.apiKey}&query=${data.searchParam}`);
  }

  /**
   * Fetches the trending TV series of the week from the API.
   * @returns An observable of the API response.
   */
  trendingTvApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/trending/tv/week?api_key=${this.apiKey}`);
  }

  /**
   * Fetches popular TV series from the API.
   * @returns An observable of the API response.
   */
  popularTvApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/popular?api_key=${this.apiKey}`);
  }

  /**
   * Fetches top-rated TV series from the API.
   * @returns An observable of the API response.
   */
  topRatedTvApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/top_rated?api_key=${this.apiKey}`);
  }

  /**
   * Fetches details of a specific season of a TV series from the API.
   * @param id - The ID of the TV series.
   * @param index - The season index.
   * @returns An observable of the API response.
   */
  getSeasonDetails(id:any, index:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/season/${index}?api_key=${this.apiKey}`);
  }

  /**
   * Fetches details of a specific episode of a TV series from the API.
   * @param id - The ID of the TV series.
   * @param index - The season index.
   * @param epindex - The episode index.
   * @returns An observable of the API response.
   */
  getEpisodeDetails(id:any, index:any, epindex:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/season/${index}/episode/${epindex}?api_key=${this.apiKey}`);
  }

  /**
   * Fetches details of a specific person from the API.
   * @param id - The ID of the person.
   * @returns An observable of the API response.
   */
  getPersonDetails(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/person/${id}?api_key=${this.apiKey}`);
  }
  
  /**
   * Fetches combined credits of a specific person from the API.
   * @param id - The ID of the person.
   * @returns An observable of the API response.
   */
  getPersonCredits(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/person/${id}/combined_credits?api_key=${this.apiKey}`);
  }

}
