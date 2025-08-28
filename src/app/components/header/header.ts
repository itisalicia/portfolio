import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "../button/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isScrolled = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }


}


