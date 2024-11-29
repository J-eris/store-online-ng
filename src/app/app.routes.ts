import { Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardianService } from './services/login-guardian.service';

export const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
    canActivate: [LoginGuardianService],
  },
  {
    path: 'listado',
    component: ListProductsComponent,
    canActivate: [LoginGuardianService],
  },
  {
    path: 'agregar',
    component: FormularioComponent,
    canActivate: [LoginGuardianService],
  },
  {
    path: 'editar/:llave',
    component: FormularioComponent,
    canActivate: [LoginGuardianService],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];
