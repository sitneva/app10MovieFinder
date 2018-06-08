import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

@Injectable()
export class MovieService {
  apiKey: string;
  constructor(private _jsonp: Jsonp) {
    this.apiKey = '638178c6a368cc732b2be4211bb1bc3c';
    console.log('MovieService !!!!!!!!!');
  }
}
