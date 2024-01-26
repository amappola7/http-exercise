import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username!: string;
  password!: string;

  constructor(
    private authService: AuthService
  ) {}

  registerUser(): void {
    const userCredentials = {
      username: this.username,
      password: this.password
    }

    this.authService.registerUser(userCredentials)
    .subscribe((response) => console.log('User registered successfully', response));
  }
}
