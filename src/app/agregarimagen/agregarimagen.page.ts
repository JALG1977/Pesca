import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregarimagen',
  standalone: true,
  templateUrl: './agregarimagen.page.html',
  styleUrls: ['./agregarimagen.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    // Ionic:
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonItem,
    IonLabel,      
    IonInput,      
    IonTextarea,   
    IonButton
  ],
})
export class AgregarimagenPage {
  url: string = '';
  descripcion: string = '';

  guardar() {
    // Aquí luego puedes enviar estos datos a un servicio, backend, etc.
    console.log('URL imagen:', this.url);
    console.log('Descripción:', this.descripcion);
  }
}
