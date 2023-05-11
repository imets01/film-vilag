import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private service:MovieService, private router:ActivatedRoute) { }
  movieDetails:any;
  movieCredits:any;
  movieProviders:any=[];

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#')
    this.getMovie(getParamId)
    this.getCredits(getParamId)
    this.getProviders(getParamId)
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'detailsresult#');
      this.movieDetails = result;
    });
  }

  getCredits(id:any){
    this.service.getMovieCredits(id).subscribe((result)=>{
      console.log(result.cast,'creditsresult#');
      this.movieCredits = result.cast;
    });
  }

  getProviders(id:any){
    this.service.getMovieProviders(id).subscribe((result)=>{
      console.log(result.results,'providersresult#');
      this.movieProviders = result.results;
    });
  }

}
