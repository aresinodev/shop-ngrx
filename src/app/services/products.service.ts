import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../shared/models';
import { APP_CONFIG } from '../util/app-config/app-config.token';
import { AppConfig } from '../util/app-config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig,
              private http: HttpClient) {}

  getProducts(): Observable<Partial<Product>[]> {
    return this.http.get<Partial<Product>[]>(`${this.appConfig.baseAPI}/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.appConfig.baseAPI}/products/${ id }`);
  }
}
