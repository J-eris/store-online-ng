import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  url = 'https://store-online-cf226-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient, private loginService: LoginService) {}

  listarProductos(): Observable<{ [key: string]: Product }> {
    const token = this.loginService.getIdToken();
    const url_listar = `${this.url}/datos.json?auth=${token}`;
    return this.http.get<{ [key: string]: Product }>(url_listar);
  }

  crearProducto(product: Product): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_crear = `${this.url}/datos.json?auth=${token}`;
    return this.http.post(url_crear, product);
  }

  modificarProductos(product: Product, llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_modificar = `${this.url}/datos/${llave}.json?auth=${token}`;
    return this.http.put(url_modificar, product);
  }

  eliminarProducto(llave: string): Observable<any> {
    const token = this.loginService.getIdToken();
    const url_eliminar = `${this.url}/datos/${llave}.json?auth=${token}`;
    return this.http.delete(url_eliminar);
  }
}
