import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  router = new Router();

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private userService: UserService) {}

  onSignUp() {
    console.log(this.signUpForm.value);
    
    this.userService.SignUp(this.signUpForm.value as IUser).subscribe(
      () => {
        alert('Sign up successfully');
        this.router.navigate(['/sign-in']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
