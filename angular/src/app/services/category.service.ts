import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API_URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  AddCategory = (data: ICategory): Observable<ICategory> => {
    return this.http.post<ICategory>(this.API_URL, data);
  };

  GetAllCategories = (params?: any): Observable<ICategory[]> => {
    return this.http.get<ICategory[]>(this.API_URL, { params });
  };
}
