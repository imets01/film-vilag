import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MovieService } from '../services/movie.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

/**
 * This component is for searching movies and TV series.
 * Responsible for handling the search form, submitting search queries, and displaying the search results.
 */
export class SearchComponent implements OnInit {

  constructor(private service: MovieService) { }

  searchResult: any = [];

  ngOnInit(): void {
    // Retrieve search results from localStorage if available
    const storedSearchResult = localStorage.getItem('searchResult');
    if (storedSearchResult) {
      this.searchResult = JSON.parse(storedSearchResult);
    }
  }

  /**how to 
   * Create a form group for the search input field.
   */
  searchForm = new FormGroup({
    'searchParam': new FormControl(null)
  });

  /**
   * Handle form submission by submitting the search query and fetching search results.
   * Stores the search results in localStorage for persistence across page navigations.
   */
   submitForm() {
    console.log(this.searchForm.value, 'searchparam#');
    this.service.search(this.searchForm.value).subscribe((result) => {
      console.log(result.results, 'searchresult#');
      this.searchResult = result.results;

      // Store search results in localStorage
      localStorage.setItem('searchResult', JSON.stringify(this.searchResult));
    });
  }

  /**
   * Generate the router link based on the media type.
   * @param media - The media type (movie or series).
   * @returns An array representing the router link based on the media type.
   */
  getRouterLink(media: any): any[] {
    if (media.media_type === 'movie') {
      return ['/movie', media.id];
    } else if (media.media_type === 'tv') {
      return ['/series', media.id];
    } else if (media.media_type === 'person') {
      return ['/person', media.id];
    } else {
      return [];
    }
  }
}
