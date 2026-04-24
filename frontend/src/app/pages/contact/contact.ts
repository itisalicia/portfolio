import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ZardFormControlComponent, } from '@shared/components/form/form.component';
import { Button } from "src/app/components/button/button";
import { EmailService } from '../../shared/services/EmailService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ZardFormControlComponent, Button, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  emailError: string = '';
  emailSuccess: string = '';

  // Labels et placeholders
  nameLabel = $localize`Nom :`;
  emailLabel = $localize`Email : `;
  messageLabel = $localize`Votre message :`;
  namePlaceholder = $localize`Votre nom...`;
  emailPlaceholder = $localize`Votre email...`;
  messagePlaceholder = $localize`Votre message...`;
  submitButtonText = $localize`Envoyer`;

  // Messages
  emailValidationError = $localize`L'email doit contenir un @`;
  emailSuccessMessage = $localize`Email envoyé avec succès !`;
  emailErrorMessage = $localize`Erreur lors de l'envoi de l'email.`;

  verifyEmail(email: string) {
    if (typeof email === 'string' && email.includes('@')) {
      this.emailError = '';
    } else {
      this.emailError = this.emailValidationError;
    }
  }

  name: string = '';
  email: string = ''
  message: string = '';

  constructor(private emailService: EmailService) { }

  onSubmit() {
    this.emailError = '';
    this.emailSuccess = '';
    if (this.name && this.email && this.message && this.emailError === '') {
      this.emailService.sendEmail(this.name, this.email, this.message).subscribe({
        next: () => {
          this.emailSuccess = this.emailSuccessMessage;
          this.name = '';
          this.email = '';
          this.message = '';
          console.log("Email sent successfully");
        },
        error: (error) => {
          this.emailError = this.emailErrorMessage;
          console.error("Error sending email", error)
        }
      });
    }
  }
}
