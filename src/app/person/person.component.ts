import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private service: MovieService, private arouter: ActivatedRoute, private router: Router) { }

  details: any;
  credits: any;
  ngOnInit(): void {
    const urlSegments = this.arouter.snapshot.url;
    //let getParamId = this.arouter.snapshot.paramMap.get('id');
    let getParamId = urlSegments[1].path

    console.log(getParamId, 'getparamid#')

    const routeName = urlSegments[0].path;
    console.log(routeName); // output: "movie" or "series"

    this.getPerson(getParamId)
    this.getCredits(getParamId)
  }

  getImageUrl(): string {
    if (this.details) {
      if (this.details.profile_path) {
        return `https://image.tmdb.org/t/p/original/${this.details.profile_path}`;
      }
    }
    return 'https://fakeimg.pl/400x600?text=IMG&font=bebas'; // Replace with your fallback image URL
  }

  getPerson(id: any) {
    this.service.getPersonDetails(id).subscribe((result) => {
      console.log(result, 'personresult#');
      this.details = result;
    });
  }

  getCredits(id: any) {
    this.service.getPersonCredits(id).subscribe((result) => {
      console.log(result.cast, 'creditsresult#');
      this.credits = result.cast;
    });
  }


}
