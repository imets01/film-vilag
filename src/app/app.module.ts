import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { SearchComponent } from './search/search.component';

import { ReactiveFormsModule } from '@angular/forms';
// import { SeriesComponent } from './series/series.component';
import { DetailsComponent } from './details/details.component';
import { PersonComponent } from './person/person.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // MovieComponent,
    HeaderComponent,
    SearchComponent,
    // SeriesComponent,
    DetailsComponent,
    PersonComponent,
    WelcomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
