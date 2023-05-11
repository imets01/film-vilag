import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-series',
  templateUrl: './detail-series.component.html',
  styleUrls: ['./detail-series.component.scss']
})
export class DetailSeriesComponent implements OnInit {

  constructor(private service:MovieService, private arouter: ActivatedRoute, private router: Router) { }
  seriesDetails:any;
  seriesCredits:any;
  seriesProviders:any=[];

  ngOnInit(): void {
    let getParamId = this.arouter.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#')
    this.getSeries(getParamId)
    this.getCredits(getParamId)
    this.getProviders(getParamId)
  }

  getSeries(id:any){
    this.service.getSeriesDetails(id).subscribe((result)=>{
      console.log(result,'detailsresult#');
      this.seriesDetails = result;
    });
  }

  getCredits(id:any){
    this.service.getSeriesCredits(id).subscribe((result)=>{
      console.log(result.cast,'creditsresult#');
      this.seriesCredits = result.cast;
    });
  }

  getProviders(id:any){
    this.service.getSeriesProviders(id).subscribe((result)=>{
      console.log(result.results,'providersresult#');
      this.seriesProviders = result.results;
    });
  }

  goToSeasons(id:any, sid:any){
    this.router.navigate(['/series', id, sid]);
  }

}
