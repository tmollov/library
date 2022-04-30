import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { map, Observable, ReplaySubject } from "rxjs";
import { AdminRegister } from "../components/interfaces/adminRegister.interface";
import { UserInterface } from "../components/interfaces/user.interface";
import { UserRegister } from "../components/interfaces/userRegister.interface";

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private currentUser = new ReplaySubject<UserInterface | null>(1);
  currentUser$ = this.currentUser.asObservable();

  constructor(private httpClient: HttpClient,
    private cookieService: CookieService) { }


  login(formGroup: FormGroup): Observable<UserInterface> {
    return this.httpClient
      .post<UserInterface>(
        'https://schoolofdotnet2022-staraplanina-api.azurewebsites.net/api/v1/Users/login',
        formGroup.value
      )
      .pipe(
        map((response) => {
          this.currentUser.next(response);
          return response;
        })
      );
  }

  userRegister(formGroup: FormGroup){
    return this.httpClient
      .post(
        'https://schoolofdotnet2022-staraplanina-api.azurewebsites.net/api/v1/Users/register',
        formGroup.value
      )

  }

  adminRegister(formGroup: FormGroup): Observable<AdminRegister> {
    return this.httpClient
      .post<AdminRegister>(
        'https://schoolofdotnet2022-staraplanina-api.azurewebsites.net/api/v1/Users/adminregister',
        formGroup.value
      )

  }



}
