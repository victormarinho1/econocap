import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
export interface SignInData {
  email: string | null | undefined;
  password_hash: string | null | undefined;
}

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  checked1 = signal<boolean>(true);

  onSubmit() {
    if (this.loginForm.valid) {
      const signInPayload: SignInData = {
        email: this.loginForm.get('email')?.value,
        password_hash: this.loginForm.get('password')?.value,
      };

      this.authService.signin(signInPayload).subscribe({
        next: () =>{
          this.router.navigate(['/admin']);
        }
      });
      console.log('Formulário enviado:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched(); // Mostra erros
    }
  }
}
