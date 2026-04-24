import { Component } from '@angular/core';
import { Button } from "src/app/components/button/button";

@Component({
  selector: 'app-introducing-me',
  imports: [Button],
  templateUrl: './introducing-me.html',
  styleUrl: './introducing-me.css'
})
export class IntroducingMe {
  contactButtonText = $localize`Contactez-moi !`;
  paragraphText = $localize`Après avoir été infirmière durant quelques années, j'ai décidé de me reconvertir dans le développement web. Je suis passionnée par la création d'expériences digitales à la fois fonctionnelles et agréables à utiliser. Curieuse et déterminée, j'aime relever des défis et apprendre en continu pour apporter des solutions concrètes et innovantes. Ma rigueur, mon esprit d'équipe et mon enthousiasme sont mes alliés pour contribuer efficacement à vos projets. Et si nous en parlions autour d'un futur projet commun ?`;
}
