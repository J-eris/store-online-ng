import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';
import { DatosService } from './datos.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  products: { [key: string]: Product } = {};
  productosActualizados = new Subject<{ [key: string]: Product }>();

  constructor(private datosService: DatosService) {}

  cargarProductos() {
    return this.datosService.listarProductos();
  }

  guardarProducto(product: Product, llave: string | null) {
    if (llave === null) {
      this.datosService.crearProducto(product).subscribe(() => {
        this.refrescarProductos();
      });
    } else {
      this.datosService.modificarProductos(product, llave).subscribe(() => {
        this.refrescarProductos();
      });
    }
  }

  private refrescarProductos() {
    this.cargarProductos().subscribe((products: { [key: string]: Product }) => {
      this.setProducts(products);
    });
  }

  setProducts(products: { [key: string]: Product }) {
    this.products = products;
    this.productosActualizados.next({ ...this.products });
  }

  getProductByLlave(llave: string): Product | undefined {
    return this.products[llave];
  }

  eliminarProducto(llave: string) {
    this.datosService.eliminarProducto(llave).subscribe(() => {
      this.refrescarProductos();
    });
  }
}
