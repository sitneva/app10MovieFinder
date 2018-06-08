import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

@Injectable()
export class MovieService {
  apiKey: string;
  constructor(private _jsonp: Jsonp) {
    this.apiKey = '638178c6a368cc732b2be4211bb1bc3c';
    console.log('MovieService !!!!!!!!!');
  }

  getPopular() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSON_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey);
   // https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=' + this.apiKey
  }
}
