import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl =  environment.apiUrl   //'http://sv.rf.gd/te1/testbk.php' //'https://eoex6q4uby5vdex.m.pipedream.net/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/get-users.php`);
  }
}