import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription, take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  subscription?: Subscription;

  loginForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      // Validators.pattern('/[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/g')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  submitLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.subscription = this.authenticationService
      .login(this.loginForm)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          console.log(response);

        },

        error: (error) => {
          alert(error.error.message);
        },
      });
  }

}
