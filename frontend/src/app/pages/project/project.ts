import { Component } from '@angular/core';
import { Cards } from 'src/app/components/cards/cards';

@Component({
  selector: 'app-project',
  imports: [Cards],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  ecochallenges = $localize`Eco-challenges est une application web qui permet aux utilisateurs de créer des défis écologiques mais aussi d'inviter leurs amis à les relever.`;
  
  nintendream = $localize`Nintendream est l'application web d'un parc d'attractions imaginaire sur le thème de la célèbre licence de jeux vidéo. On y retrouve un back-office permettant aux administrateurs de gérer les attractions, restaurants et hôtels du parc.`;
  
  portfolio = $localize`Portfolio vitrine de mes compétences acquises.`;
  
  wildaway = $localize`Application web permettant de trouver des hôtels et restaurants dans plusieurs villes du monde. Création de notre API REST.`;
}
