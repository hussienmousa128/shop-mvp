import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  login(email: string , password: string):void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, 'mock_token_value');
  }
  logout():void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }

  get accessToken():string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);}

  isLoggedIn(): boolean{
    if(this.accessToken) return true;
    return false;
  }
}
