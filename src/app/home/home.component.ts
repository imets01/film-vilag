import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieService, private router: Router) { }

  trendingApiData:any=[];
  popularApiData:any=[];
  // searchResult:any=[];

  ngOnInit(): void {
    this.getTrendingData()
    this.getPopularData()
  }

  goToSearch(){
    this.router.navigate(['search']);
  }

  getTrendingData(){
    this.service.trendingApiData().subscribe((result)=>{
      console.log(result.results,'trendingresult#');
      this.trendingApiData = result.results;
    });
  }

  getPopularData(){
    this.service.popularApiData().subscribe((result)=>{
      console.log(result.results,'popularresult#');
      this.popularApiData = result.results;
    });
  }

  // searchForm = new FormGroup({
  //   'movieName':new FormControl(null)
  // });
  
  // submitForm()
  // {
  //   console.log(this.searchForm.value,'searchresult#');
  //   this.service.searchMovie(this.searchForm.value).subscribe((result)=>{
  //     console.log(result.results,'searchmovie#');
  //     this.searchResult = result.results;
  //   });
  // }

}
