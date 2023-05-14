import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * HeaderComponent is responsible for the header section of the application.
 * It handles navigation functionality.
 */
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Navigates to the home page with the movies section.
   */
  goToHome(){
    this.router.navigate(['home/movies']);
  }

  /**
   * Navigates to the home page with the series section.
   */
  goToSeries(){
    this.router.navigate(['home/series']);
  }

  /**
   * Navigates to the search page.
   */
  goToSearch(){
    this.router.navigate(['search']);
  }

}
