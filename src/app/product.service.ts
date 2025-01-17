import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Album } from './album';
import { Product } from './product';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productUrl = '../assets/products.json';

  constructor(private _http: HttpClient) {
  }

  getAlbum (_id: number): Observable<Album> {
    return this._http.get<Album>(this._albumUrl);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._productUrl);
  }
}
