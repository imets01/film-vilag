import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  apiBaseUrl = 'https://api.themoviedb.org/3';
  apiKey = '1bf6d24beb8b99101d0ae2e3af4196b6';

  trendingApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  popularApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  topRatedApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/top_rated?api_key=${this.apiKey}`);
  }

  getMovieDetails(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieCredits(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getMovieProviders(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/movie/${id}/watch/providers?api_key=${this.apiKey}`);
  }

  getSeriesDetails(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  getSeriesCredits(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  getSeriesProviders(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/watch/providers?api_key=${this.apiKey}`);
  }

  search(data:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/search/multi?api_key=${this.apiKey}&query=${data.searchParam}`);
  }

  trendingTvApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/trending/tv/week?api_key=${this.apiKey}`);
  }

  popularTvApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/popular?api_key=${this.apiKey}`);
  }

  topRatedTvApiData():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/top_rated?api_key=${this.apiKey}`);
  }

  getSeasonDetails(id:any, index:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/season/${index}?api_key=${this.apiKey}`);
  }

  getEpisodeDetails(id:any, index:any, epindex:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/tv/${id}/season/${index}/episode/${epindex}?api_key=${this.apiKey}`);
  }

  getPersonDetails(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/person/${id}?api_key=${this.apiKey}`);
  }
  
  getPersonCredits(id:any):Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/person/${id}/combined_credits?api_key=${this.apiKey}`);
  }

}
