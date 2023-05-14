import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

/**
 * DetailsComponent is responsible for displaying the details of a movie or series.
 * It retrieves the necessary data from the movie service based on the provided ID and route information.
 * The retrieved data includes details, credits, and providers for movies, and also handles series-specific information such as seasons and episodes.
 * This component is used to render the details view in the application.
 */
export class DetailsComponent implements OnInit {

  constructor(private service: MovieService, private arouter: ActivatedRoute, private router: Router) { }
  details: any;
  parentId: any;
  credits: any;
  providers: any = [];
  seasonIndex: any;
  episodeIndex: any;

  ngOnInit(): void {
    const urlSegments = this.arouter.snapshot.url;
    let getParamId = urlSegments[1].path

    console.log(getParamId, 'getparamid#')

    const routeName = urlSegments[0].path;
    console.log(routeName); // output: "movie" or "series"

    if (routeName === 'movie') {
      // Handle movie route
      this.getMovie(getParamId)
      this.getCredits(getParamId)
      this.getProviders(getParamId)
    } else if (routeName === 'series') {
      // Handle series route
      this.getSeries(getParamId)
      this.getSeriesCredits(getParamId)
      this.getSeriesProviders(getParamId)
      if (urlSegments.length >= 4 && urlSegments[2].path === 'season') {
        // Get the season index from the third segment of the url, for example in the case of the second episode of the season the index will be 2
        this.seasonIndex = urlSegments[3].path; 
        this.getSeason(getParamId, this.seasonIndex)
        this.parentId = getParamId;

        if (urlSegments.length >= 6 && urlSegments[4].path === 'episode') {
          this.episodeIndex = urlSegments[5].path; // Get the episode index from the fifth segment of the url
          this.getEpisode(getParamId, this.seasonIndex, this.episodeIndex)
        }
      }
    } else {
      // Handle unknown route
      console.log('Invalid Route');
    }

  }

  /**
  * Returns the URL for the image based on available paths in 'this.details'
  * @returns The URL of the image
  */
  getImageUrl(): string {
    if (this.details) {
      if (this.details.poster_path) {
        return `https://image.tmdb.org/t/p/original/${this.details.poster_path}`;
      } else if (this.details.still_path) {
        return `https://image.tmdb.org/t/p/original/${this.details.still_path}`;
      } else if (this.details.profile_path) {
        return `https://image.tmdb.org/t/p/original/${this.details.profile_path}`;
      }
    }
    return 'https://fakeimg.pl/400x600?text=IMG&font=bebas'; // Replace with your fallback image URL
  }

  /**
   * Fetches movie details from the service and assigns the result to 'this.details'
   * @param id - The ID of the movie
   */
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'detailsresult#');
      this.details = result;
    });
  }

  /**
   * Fetches movie credits from the service and assigns the cast to 'this.credits'
   * @param id - The ID of the movie
   */
  getCredits(id: any) {
    this.service.getMovieCredits(id).subscribe((result) => {
      console.log(result.cast, 'creditsresult#');
      this.credits = result.cast;
    });
  }

  /**
     * Fetches movie providers from the service and assigns the result to 'this.providers'
     * @param id - The ID of the movie
     */
  getProviders(id: any) {
    this.service.getMovieProviders(id).subscribe((result) => {
      console.log(result.results, 'providersresult#');
      this.providers = result.results;
    });
  }

  /**
   * Fetches series details from the service and assigns the result to 'this.details'
   * @param id - The ID of the series
   */
  getSeries(id: any) {
    this.service.getSeriesDetails(id).subscribe((result) => {
      console.log(result, 'seriesdetailsresult#');
      this.details = result;
      this.parentId = this.details.id;
    });
  }

  /**
  * Fetches series credits from the service and assigns the cast to 'this.credits'
  * @param id - The ID of the series
  */
  getSeriesCredits(id: any) {
    this.service.getSeriesCredits(id).subscribe((result) => {
      console.log(result.cast, 'seriescreditsresult#');
      this.credits = result.cast;
    });
  }

  /**
   * Fetches series providers from the service and assigns the result to 'this.providers'
   * @param id - The ID of the series
   */
  getSeriesProviders(id: any) {
    this.service.getSeriesProviders(id).subscribe((result) => {
      console.log(result.results, 'seriesprovidersresult#');
      this.providers = result.results;
    });
  }

  /**
   * Navigates to the seasons page of a series with the specified ID and season index
   * @param id - The ID of the series
   * @param index - The index of the season
   */
  goToSeasons(id: any, index: any) {
    this.router.navigate(['/series', id, 'season', index]);
  }

  /**
 * Fetches season details from the service and assigns the result to 'this.details'
 * @param id - The ID of the series
 * @param index - The index of the season
 */
  getSeason(id: any, index: any) {
    this.service.getSeasonDetails(id, index).subscribe((result) => {
      console.log(result, 'seasonresult#');
      this.details = result;
      console.log(this.details.episodes, 'episodes#');
    });
  }

  /**
   * Navigates to the episodes page of a series with the specified ID, season index, and episode index
   * @param id - The ID of the series
   * @param index - The index of the season
   * @param epindex - The index of the episode
   */
  goToEpisodes(id: any, index: any, epindex: any) {
    console.log(epindex, 'episode index#');
    this.router.navigate(['/series', id, 'season', index, 'episode', epindex]);
  }

  /**
   * Fetches episode details from the service and assigns the result to 'this.details'
   * @param id - The ID of the series
   * @param index - The index of the season
   * @param epindex - The index of the episode
   */
  getEpisode(id: any, index: any, epindex: any) {
    this.service.getEpisodeDetails(id, index, epindex).subscribe((result) => {
      console.log(result, 'episoderesult#');
      this.details = result;
    });
  }



}