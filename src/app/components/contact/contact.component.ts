import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.http.post('http://localhost:3000/send-email', this.form.value).subscribe({
        next: () => {
          alert('Email sent successfully!');
        },
        error: (err) => {
          console.error('Failed to send email', err);
          alert('Error sending email.');
        },
      });
    }
  }
}