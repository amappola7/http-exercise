import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(
    private authService: AuthService
  ) {}

  loginUser(): void {
    const userCredentials = {
      username: this.username,
      password: this.password
    };

    this.authService.loginUser(userCredentials)
    .subscribe((response) => console.log('User logged in successfully', response));
  }
}
