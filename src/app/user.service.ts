import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://eoex6q4uby5vdex.m.pipedream.net/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/get-users.php`);
  }
}