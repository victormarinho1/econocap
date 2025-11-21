import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';;
import { PasswordModule } from 'primeng/password';

//@ts-ignore
import JustValidate from 'just-validate';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, InputTextModule,ReactiveFormsModule,PasswordModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login  {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  checked1 = signal<boolean>(true);


  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulário enviado:', this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched(); // Mostra erros
    }
  }
}
