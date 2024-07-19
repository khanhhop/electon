import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  SignUp = (data: IUser): Observable<any> => {
    return this.http.post(`http://localhost:3000/register`, data);
  };

  SignIn = (data: IUser): Observable<any> => {
    return this.http.post(`http://localhost:3000/login`, data);
  };

  CheckUserValid = () => {
    let check = false;
    const token: string = localStorage.getItem('accessToken') as string;
    if (!token) return check;

    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000 && decoded.sub == 1) {
        check = true;
      }
    } catch (error) {
      console.log(error);
    }
    return check;
  };
}
