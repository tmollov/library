import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../components/interfaces/userRegister.interface';


@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsersCount() {
    return this.httpClient.get<number>(`https://schoolofdotnet2022-staraplanina-api.azurewebsites.net/api/v1/Users/Count`);
  }

  getUser(id: number) {
    return this.httpClient.get<UserRegister[]>(`https://schoolofdotnet2022-staraplanina-api.azurewebsites.net/api/v1/User/${id}`);
  }
}
