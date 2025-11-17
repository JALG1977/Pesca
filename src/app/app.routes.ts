import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  
  {
    path: 'foro',
    loadComponent: () => import('./foro/foro.page').then( m => m.ForoPage)
  },
   
  {
    path: 'agregarimagen',
    loadComponent: () =>
      import('./agregarimagen/agregarimagen.page').then(m => m.AgregarimagenPage)
  },
  {
    path: 'agregartema',
    loadComponent: () => import('./agregartema/agregartema.page').then( m => m.AgregartemaPage)
  }
];
