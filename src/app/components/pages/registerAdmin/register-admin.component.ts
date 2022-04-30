import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      // Validators.pattern('/[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/g')
    ]),
    phoneNumber: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    streetNumber: new FormControl('', [Validators.required]),
    buildingNumber: new FormControl('', [Validators.required]),
    apartmentNumber: new FormControl('', [Validators.required]),
    additionalInfo: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }


  ngOnInit(): void {
  }

  submitRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(123);


    this.authenticationService
      .adminRegister(this.registerForm)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.router.navigate(['/admin'])
          console.log(response);

        },
        error: (error) => {
          alert(error.error.message);
        },
      });
  }

}
