import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    state: '',
    dob: '',
    gender: ''
  };

  successMessage: string | null = null;
  isDobValid: boolean = true;

  onSubmit(registrationForm: NgForm) {
    if (registrationForm.invalid) {
      return;
    }

    this.isDobValid = new Date(this.user.dob) <= new Date();

    if (!this.isDobValid) {
      return;
    }

    if (this.user.password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('User registration:', this.user);
    this.successMessage = 'Registration successful!';
    registrationForm.resetForm();
  }
}
