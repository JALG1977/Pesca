import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonModal,
  IonButton,
  
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

interface Photo {
  src: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonModal,
    IonButton,
    RouterLink
  ],
})
export class HomePage {
  photos: Photo[] = [
    {
      src: 'assets/images/pesca1.jpg',
      title: 'Pesca 1',
      description: 'rio trancura.',
    },
    {
      src: 'assets/images/pesca2.jpg',
      title: 'Pesca 2',
      description: 'a orillas del río tolten sector el madrigal',
    },
    {
      src: 'assets/images/pesca3.jpg',
      title: 'Pesca 3',
      description: 'Pesca con Mosca.',
    },
    {
      src: 'assets/images/pesca4.jpg',
      title: 'Pesca 4',
      description: 'Lago Collico pesca en bote',
    },
    {
      src: 'assets/images/pesca5.jpg',
      title: 'Pesca 5',
      description: 'El primero del día.',
    },
  ];

  isModalOpen = false;
  selectedPhoto: Photo | null = null;

  openModal(photo: Photo) {
    this.selectedPhoto = photo;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}

