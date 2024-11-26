import { Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'listado', component: ListProductsComponent },
  { path: 'agregar', component: FormularioComponent },
  { path: 'editar/:id', component: FormularioComponent },
  { path: '**', component: ErrorComponent },
];
