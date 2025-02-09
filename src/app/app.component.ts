import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RegistrationComponent],
  template: '<app-registration></app-registration>',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
