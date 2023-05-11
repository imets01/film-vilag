import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private service:MovieService, private router: Router) { }

  tvtrendingApiData:any=[];
  tvpopularApiData:any=[];

  ngOnInit(): void {
    this.getTrendingData()
    this.getPopularData()
  }

  getTrendingData(){
    this.service.trendingTvApiData().subscribe((result)=>{
      console.log(result.results,'tv-trendingresult#');
      this.tvtrendingApiData = result.results;
    });
  }

  getPopularData(){
    this.service.popularTvApiData().subscribe((result)=>{
      console.log(result.results,'tv-popularresult#');
      this.tvpopularApiData = result.results;
    });
  }

}
