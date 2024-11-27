import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// export interface IUsers {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// }
export interface IUsers {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private url: string = "https://jsonplaceholder.typicode.com/users" //
  private url: string = 'https://api.github.com/users'; 

  constructor(private http: HttpClient ) { }

  //http = Inject(HttpClient)

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.url);
  }
}