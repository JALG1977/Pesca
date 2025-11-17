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
  IonButton,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    // Ionic
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    // Router
    RouterLink
  ],
})
export class RegistroPage {
  nombre: string = '';
  email: string = '';
  password: string = '';
  confirmarPassword: string = '';

  registrar() {
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirmar:', this.confirmarPassword);
    
  }
}

