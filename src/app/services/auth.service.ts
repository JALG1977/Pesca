import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const CURRENT_USER_KEY = 'current_user';

export interface UsuarioSesion {
  id: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: UsuarioSesion | null = null;

  constructor(private router: Router) {
    // Intento de cargar sesión al iniciar el servicio
    this.cargarSesionDesdeStorage();
  }

  // --- Manejo de almacenamiento en localStorage ---

  private cargarSesionDesdeStorage(): void {
    try {
      if (typeof localStorage === 'undefined') {
        return;
      }
      const raw = localStorage.getItem(CURRENT_USER_KEY);
      if (raw) {
        this.usuarioActual = JSON.parse(raw);
      }
    } catch (e) {
      console.error('Error al leer sesión desde localStorage', e);
    }
  }

  private guardarSesionEnStorage(): void {
    try {
      if (typeof localStorage === 'undefined') {
        return;
      }
      if (this.usuarioActual) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(this.usuarioActual));
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (e) {
      console.error('Error al guardar sesión en localStorage', e);
    }
  }

  // --- API pública usada por login, guard, etc. ---

  async iniciarSesion(usuario: UsuarioSesion): Promise<void> {
    this.usuarioActual = usuario;
    this.guardarSesionEnStorage();
  }

  async cerrarSesion(): Promise<void> {
    this.usuarioActual = null;
    this.guardarSesionEnStorage();
    this.router.navigate(['/login']);
  }

  getUsuarioActualSincrono(): UsuarioSesion | null {
    return this.usuarioActual;
  }

  async getUsuarioActual(): Promise<UsuarioSesion | null> {
    if (!this.usuarioActual) {
      this.cargarSesionDesdeStorage();
    }
    return this.usuarioActual;
  }

  async estaAutenticado(): Promise<boolean> {
    const user = await this.getUsuarioActual();
    return !!user;
  }
  getUsuarioActualSync(): { id: number; email: string } | null {
  try {
    const raw = localStorage.getItem('current_user');
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
}
