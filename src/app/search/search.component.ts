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
  'searchParam':new FormControl(null)
});

submitForm()
{
  console.log(this.searchForm.value,'searchparam#');
  this.service.search(this.searchForm.value).subscribe((result)=>{
    console.log(result.results,'searchresult#');
    this.searchResult = result.results;
  });
}

getRouterLink(media: any): any[] {
  if (media.media_type === 'movie') {
    return ['/movie', media.id];
  } else if (media.media_type === 'tv') {
    return ['/series', media.id];
  } else {
    return [];
  }
}

}
