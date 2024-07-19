import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  router = new Router();

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private userService: UserService) {}

  ngOnInit() {
    const isAdmin = this.userService.CheckUserValid();

    if (isAdmin) {
      this.router.navigate(['/admin/products']);
    }
  }

  onSignUp() {
    this.userService.SignIn(this.signInForm.value as IUser).subscribe(
      (data) => {
        alert('Sign in successfully');
        localStorage.setItem('accessToken', data?.accessToken);
        this.router.navigate(['/admin/products']);
      },
      (error) => {
        alert(error?.error);
        console.log(error);
      }
    );
  }
}
