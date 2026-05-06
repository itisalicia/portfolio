import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ZardFormControlComponent } from '@shared/components/form/form.component';
import { Button } from 'src/app/components/button/button';
import { EmailService } from '../../shared/services/EmailService';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [ZardFormControlComponent, Button, CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  emailError = '';
  emailSuccess = '';

  name = '';
  email = '';
  message = '';

  constructor(private emailService: EmailService) {}

  verifyEmail(email: string) {
    if (typeof email === 'string' && email.includes('@')) {
      this.emailError = '';
    } else {
      this.emailError = 'contact.emailValidationError';
    }
  }

  onSubmit() {
    this.emailError = '';
    this.emailSuccess = '';
    if (this.name && this.email && this.message && this.emailError === '') {
      this.emailService.sendEmail(this.name, this.email, this.message).subscribe({
        next: () => {
          this.emailSuccess = 'contact.emailSentSuccess';
          this.name = '';
          this.email = '';
          this.message = '';
        },
        error: (error) => {
          this.emailError = 'contact.emailSentError';
          console.error('Error sending email', error);
        }
      });
    }
  }
}
