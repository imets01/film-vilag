import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieService, private arouter: ActivatedRoute, private router: Router) { }

  trendingApiData: any = [];
  popularApiData: any = [];
  topRatedApiData: any = [];
  getParam: any;

  ngOnInit(): void {
    const urlSegments = this.arouter.snapshot.url;
    this.getParam = urlSegments[1].path

    console.log(this.getParam, 'getparam#')

    if (this.getParam === 'movies') {
      // Handle movies route
      this.getTrendingData()
      this.getPopularData()
      this.getTopRatedData()
    } else if (this.getParam === 'series') {
      // Handle series route
      this.getTvTrendingData()
      this.getTvPopularData()
      this.getTvTopRatedData()
    }
  }

  goToSearch() {
    this.router.navigate(['search']);
  }

  goToClicked(id: any) {
    if (this.getParam === 'movies') {
      console.log(this.getParam, 'clicked movie#');
      this.router.navigate(['/movie', id]);
    } else if (this.getParam === 'series') {
      this.router.navigate(['/series', id]);
    }
  }


  getTrendingData() {
    this.service.trendingApiData().subscribe((result) => {
      console.log(result.results, 'trendingresult#');
      this.trendingApiData = result.results;
    });
  }

  getPopularData() {
    this.service.popularApiData().subscribe((result) => {
      console.log(result.results, 'popularresult#');
      this.popularApiData = result.results;
    });
  }

  getTopRatedData() {
    this.service.topRatedApiData().subscribe((result) => {
      console.log(result.results, 'topratedresult#');
      this.topRatedApiData = result.results;
    });
  }

  getTvTrendingData() {
    this.service.trendingTvApiData().subscribe((result) => {
      console.log(result.results, 'tv-trendingresult#');
      this.trendingApiData = result.results;
    });
  }

  getTvPopularData() {
    this.service.popularTvApiData().subscribe((result) => {
      console.log(result.results, 'tv-popularresult#');
      this.popularApiData = result.results;
    });
  }

  getTvTopRatedData() {
    this.service.topRatedTvApiData().subscribe((result) => {
      console.log(result.results, 'tv-topratedresult#');
      this.topRatedApiData = result.results;
    });
  }
}
