import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ZardFormControlComponent, } from '@shared/components/form/form.component';
import { Button } from "src/app/components/button/button";

@Component({
  selector: 'app-contact',
  imports: [ZardFormControlComponent, Button, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  emailError: string = '';

  verifyEmail(email: string) {
    if (typeof email === 'string' && email.includes('@')) {
      this.emailError = '';
    } else {
      this.emailError = 'L\'email doit contenir un @';
    }
  }

}
