import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

/**
 * Represents a component for displaying details about a person.
 * Responsible for fetching and displaying person details and credits.
 */
export class PersonComponent implements OnInit {

  constructor(private service: MovieService, private arouter: ActivatedRoute, private router: Router) { }

  details: any;
  credits: any;
  ngOnInit(): void {
    const urlSegments = this.arouter.snapshot.url;
    let getParamId = urlSegments[1].path

    console.log(getParamId, 'getparamid#')

    const routeName = urlSegments[0].path;
    console.log(routeName); // output: "movie" or "series"

    // Fetch person details and credits
    this.getPerson(getParamId)
    this.getCredits(getParamId)
  }

  /**
   * Returns the URL of the person's profile image. If the details are available and contain a profile_path, the URL is constructed using the path.
   * Otherwise, a fallback image URL is returned.
   * @returns The URL of the person's profile image.
   */
  getImageUrl(): string {
    if (this.details) {
      if (this.details.profile_path) {
        return `https://image.tmdb.org/t/p/original/${this.details.profile_path}`;
      }
    }
    return 'https://fakeimg.pl/400x600?text=IMG&font=bebas'; // Replace with your fallback image URL
  }

  /**
   * Fetches person details from the service and assigns the result to 'this.details'.
   * @param id - The ID of the person.
   */
  getPerson(id: any) {
    this.service.getPersonDetails(id).subscribe((result) => {
      console.log(result, 'personresult#');
      this.details = result;
    });
  }

  /**
   * Fetches person credits from the service and assigns the cast to 'this.credits'.
   * @param id - The ID of the person.
   */
  getCredits(id: any) {
    this.service.getPersonCredits(id).subscribe((result) => {
      console.log(result.cast, 'creditsresult#');
      this.credits = result.cast;
    });
  }


}
