import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregartema',
  standalone: true,
  templateUrl: './agregartema.page.html',
  styleUrls: ['./agregartema.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  ],
})
export class AgregartemaPage {
  titulo: string = '';
  autor: string = '';
  descripcion: string = '';

  guardarTema() {
    console.log('Título:', this.titulo);
    console.log('Autor:', this.autor);
    console.log('Descripción:', this.descripcion);
    // Aquí podrías enviar el nuevo tema a un servicio o backend
  }
}
