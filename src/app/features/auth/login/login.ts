import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
submitted = false;

fb = inject(FormBuilder);
form = this.fb.group({
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.minLength(6)]]
}
)
onSubmit() {
this.submitted = true;
if(this.form.invalid){
  return;
}
console.log(this.form.value);
this.form.reset();
this.submitted = false;
}}
