import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then((m) => m.LoginPage),
  },

  // Registro
  {
    path: 'registro',
    loadComponent: () =>
      import('./registro/registro.page').then((m) => m.RegistroPage),
  },

  // Home protegido
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  // Foro 
  {
    path: 'foro',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./foro/foro.page').then((m) => m.ForoPage),
  },

  // Agregar imagen 
  {
    path: 'agregarimagen',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./agregarimagen/agregarimagen.page').then(
        (m) => m.AgregarimagenPage   // 👈 aquí el cambio importante
      ),
  },

  // Agregar tema del foro 
  {
    path: 'agregartema',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./agregartema/agregartema.page').then(
        (m) => m.AgregartemaPage
      ),
  },

  // Chat 
  {
    path: 'chat',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./chat/chat.page').then((m) => m.ChatPage),
  },

  // Wildcard
  {
    path: '**',
    redirectTo: 'login',
  },
];
