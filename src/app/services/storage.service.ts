import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setLogin(data) {
    localStorage.setItem('loginData',JSON.stringify(data));
  }

  public getLogin() {
    return localStorage.getItem('loginData') == null ? null: JSON.parse(localStorage.getItem('loginData'));
  }

  public clean() {
     localStorage.removeItem('loginData');
  }
}
