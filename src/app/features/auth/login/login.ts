import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
submitted = false;
auth = inject(AuthService);
router = inject(Router)
fb = inject(FormBuilder);
form = this.fb.group({
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.minLength(6)]]
}
)
email = this.form.value.email?? '';
password = this.form.value.password?? '';

onSubmit() {
this.submitted = true;
if(this.form.invalid){
  return;
}
this.auth.login(this.email, this.password);
this.router.navigate(['/'])
}}
