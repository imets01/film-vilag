import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private service:MovieService) { }

  searchResult:any=[];

  ngOnInit(): void {
  }

searchForm = new FormGroup({
  'movieName':new FormControl(null)
});

submitForm()
{
  console.log(this.searchForm.value,'searchresult#');
  this.service.searchMovie(this.searchForm.value).subscribe((result)=>{
    console.log(result.results,'searchmovie#');
    this.searchResult = result.results;
  });
}

}
