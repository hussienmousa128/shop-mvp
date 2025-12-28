import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Products } from './features/products/products';
import { Cart } from './features/cart/cart';
import { Login } from './features/auth/login/login';
import { authGuard } from './core/auth/auth-guard';

export const routes: Routes = [
  {path: '', component:Home},
  {path: 'products', component:Products},
  {path: 'cart', component: Cart , canActivate: [authGuard]},
  {path: 'login', component: Login },
  {path: '**', redirectTo: '' },
];
