import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private http: HttpClient) {
  }

  getAlbum(id: number) {
    return this.http.get(this._albumUrl).pipe(map(value => value));

  }
}
