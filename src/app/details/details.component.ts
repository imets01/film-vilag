import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private service: MovieService, private arouter: ActivatedRoute, private router: Router) { }
  details: any;
  parentId: any;
  credits: any;
  providers: any = [];
  seasonDetails: any;
  seasonIndex: any;
  episodeIndex: any;

  ngOnInit(): void {
    const urlSegments = this.arouter.snapshot.url;
    //let getParamId = this.arouter.snapshot.paramMap.get('id');
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
        this.seasonIndex = urlSegments[3].path; // Get the season ID from the third segment
        this.getSeason(getParamId, this.seasonIndex)
        this.parentId = getParamId;

        if (urlSegments.length >= 6 && urlSegments[4].path === 'episode') {
          this.episodeIndex = urlSegments[5].path; // Get the episode ID from the fifth segment
          this.getEpisode(getParamId, this.seasonIndex, this.episodeIndex)
        }
      }
    } else {
      // Handle unknown route
      console.log('Invalid Route');
    }

  }

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

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'detailsresult#');
      this.details = result;
    });
  }

  getCredits(id: any) {
    this.service.getMovieCredits(id).subscribe((result) => {
      console.log(result.cast, 'creditsresult#');
      this.credits = result.cast;
    });
  }

  getProviders(id: any) {
    this.service.getMovieProviders(id).subscribe((result) => {
      console.log(result.results, 'providersresult#');
      this.providers = result.results;
    });
  }

  getSeries(id: any) {
    this.service.getSeriesDetails(id).subscribe((result) => {
      console.log(result, 'seriesdetailsresult#');
      this.details = result;
      this.parentId = this.details.id;
    });
  }

  getSeriesCredits(id: any) {
    this.service.getSeriesCredits(id).subscribe((result) => {
      console.log(result.cast, 'seriescreditsresult#');
      this.credits = result.cast;
    });
  }

  getSeriesProviders(id: any) {
    this.service.getSeriesProviders(id).subscribe((result) => {
      console.log(result.results, 'seriesprovidersresult#');
      this.providers = result.results;
    });
  }

  goToSeasons(id: any, index: any) {
    this.router.navigate(['/series', id, 'season', index]);
  }

  getSeason(id: any, index: any) {
    this.service.getSeasonDetails(id, index).subscribe((result) => {
      console.log(result, 'seasonresult#');
      this.details = result;
      console.log(this.details.episodes, 'episodes#');
    });
  }

  goToEpisodes(id: any, index: any, epindex: any) {
    console.log(epindex, 'episode index#');
    this.router.navigate(['/series', id, 'season', index, 'episode', epindex]);
  }

  getEpisode(id: any, index: any, epindex: any) {
    this.service.getEpisodeDetails(id, index, epindex).subscribe((result) => {
      console.log(result, 'episoderesult#');
      this.details = result;

    });
  }

 

}