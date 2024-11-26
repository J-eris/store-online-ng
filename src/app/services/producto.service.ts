import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private idSiguiente = 1;
  products: Product[] = [];

  constructor() {
    this.inicializarProductos();
  }

  private inicializarProductos() {
    this.products = [
      new Product(this.idSiguiente++, 'Pantalon', 100.0),
      new Product(this.idSiguiente++, 'Remera', 50.0),
      new Product(this.idSiguiente++, 'Zapatillas', 200.0),
    ];
  }

  guardarProducto(product: Product) {
    if (product.id) {
      const index = this.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.products[index] = product;
      }
    } else {
      product.id = this.idSiguiente++;
      this.products.push(product);
    }
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  eliminarProducto(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
