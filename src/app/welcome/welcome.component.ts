import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  bannerResult: any[] = [];
  currentBannerIndex: number = 0;

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.fetchBannerData();
    setInterval(() => this.changeBannerImage(), 7000);
  }

  fetchBannerData(): void {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  changeBannerImage(): void {
    if (this.bannerResult.length > 0) {
      this.currentBannerIndex = (this.currentBannerIndex + 1) % this.bannerResult.length;
    }
  }

  getBannerImageUrl(): string {
    if (this.bannerResult.length > 0) {
      const currentBanner = this.bannerResult[this.currentBannerIndex];
      return `https://image.tmdb.org/t/p/original/${currentBanner.backdrop_path}`;
    }
    return '';
  }
  
}





