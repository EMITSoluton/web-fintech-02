import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {

    public isAuthenticated(): boolean {
        const token =localStorage.getItem('authToken')
        if(token){
          return true
        }else{
          return false
        } 
      }
}