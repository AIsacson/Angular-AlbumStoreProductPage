import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {
  }

  getAlbum (_id: number) {
    return this._http.get(this._albumUrl).pipe(map(value => value.json()));
  }
}
