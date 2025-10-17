import { Injectable } from '@angular/core';
import { LoginUser } from '../models/login-user.models';


@Injectable({
  providedIn: 'root'
})
export class LoginServices {
  constructor() { }

  async Login(path:string, loginUser: LoginUser): Promise<any> {
    return await window.electronAPI!.http.login(path, loginUser);
  }
}
