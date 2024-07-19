import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  AddProduct = (data: IProduct): Observable<IProduct> => {
    return this.http.post<IProduct>(this.API_URL, data);
  };

  GetAllProducts = (params?: any): Observable<IProduct[]> => {
    return this.http.get<IProduct[]>(this.API_URL, {
      params: {
        _expand: 'category',
        ...params,
      },
    });
  };

  DeleteProduct = (id: string) => {
    return this.http.delete(this.API_URL + '/' + id);
  };

  GetProductById = (id: string): Observable<IProduct> => {
    return this.http.get<IProduct>(this.API_URL + '/' + id, {
      params: {
        _expand: 'category',
      },
    });
  };

  UpdateProduct = (id: string, data: IProduct): Observable<IProduct> => {
    return this.http.put<IProduct>(this.API_URL + '/' + id, data);
  };
}
