import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Obsercvables make it easier to create async code
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//this is our type of injector
// it makes an API call and then passes it into our component
export class MoviesService {
    readonly apikey = 'bfdaf441';
    readonly api = `https://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json`;
  
    constructor(private http: HttpClient) { }
  
    public defaultMovie<T>(): Observable<T>{
    return this.http.get<T>(`http://www.omdbapi.com/?t=fifth+element&apikey=${this.apikey}`);
  }

  public getMovies<T>(titleValue: any): Observable<T>{
    console.log(`${this.api}&s=${titleValue}`);
    return this.http.get<T>(`${this.api}&s=${titleValue}`);
  }

  getDetails(value: any): Observable<any> {
      console.log(`${this.api}&i=${value}`);
    return this.http.get(`${this.api}&i=${value}`);
  }
}
