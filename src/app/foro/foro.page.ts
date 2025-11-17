import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-foro',
  standalone: true,
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    RouterLink
  ],
})
export class ForoPage {
  temas = [
    {
      titulo: 'Mejores señuelos para pesca en río',
      autor: 'Carlos R.',
      descripcion:
        'Comparte tus experiencias con señuelos para truchas, salmones y pejerreyes.'
    },
    {
      titulo: 'Técnicas para pesca desde orilla',
      autor: 'María L.',
      descripcion:
        '¿Qué cañas recomiendan? ¿Qué distancia alcanzan? Consejos para principiantes.'
    },
    {
      titulo: 'Pesca en kayak: equipo y seguridad',
      autor: 'Jorge M.',
      descripcion:
        'Discusión sobre chalecos, posicionamiento, estabilidad del kayak y líneas recomendadas.'
    }
  ];
}


