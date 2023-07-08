import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  trendingMovies:any[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(public _MoviesService:MoviesService, public _AuthServiceAuthService:AuthService) {}
  ngOnInit():void {
    this._AuthServiceAuthService.showHome();
    this._MoviesService.getTrending().subscribe((response)=>{
      this.trendingMovies=response.results;
    })
  }

}
