import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  scrollToSection(sectionId: string) {
    console.log('Fonction appelée avec:', sectionId);;
    const element = document.getElementById(sectionId);
    console.log('Élément trouvé:', element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    };
  }

}
