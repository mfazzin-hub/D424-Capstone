import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GundamService} from '../../services/gundam.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login-screen',
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true,
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent {

  private username: string = "Gundam";
  private password: string = "GundamPassword";
  errorMessage: string = '';

  constructor(private router: Router) {
  }

  user = {
    username: '',
    password: ''
  };

  checkLogin() {
    this.errorMessage = '';

    if (
      this.user.username !== this.username ||
      this.user.password !== this.password
    ){
      this.errorMessage = "Incorrect username or password."
    }
      else {
      this.router.navigate(['/gundams'])
    }
  }

}
