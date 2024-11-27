import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }
  checkName(): void {
    const nameControl = this.form.get('name');
    if (nameControl?.invalid && nameControl?.touched) {
      alert('Name is required.');
    }
  }
  
  checkEmail(): void {
    const emailControl = this.form.get('email');
    if (emailControl?.invalid && emailControl?.touched) {
      alert('Please enter a valid email.');
    }
  }
  

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Form submitted successfully!');
    }
  }
}
