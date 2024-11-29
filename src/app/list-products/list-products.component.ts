import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../products/product.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductsComponent, FormsModule, FormularioComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  products: { [key: string]: Product } = {};
  productsSubscription: Subscription | null = null;

  constructor(
    private productService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarProductos();

    this.productsSubscription =
      this.productService.productosActualizados.subscribe((products) => {
        this.products = products;
      });
  }

  cargarProductos() {
    this.productService
      .cargarProductos()
      .subscribe((products: { [key: string]: Product }) => {
        this.products = products;
        this.productService.setProducts(products);
      });
  }

  obtenerLLaves() {
    if (this.products) {
      return Object.keys(this.products);
    }
    return [];
  }

  addProducts() {
    this.router.navigate(['/agregar']);
  }

  ngOnDestroy(): void {
    if (this.productsSubscription !== null) {
      this.productsSubscription.unsubscribe();
    }
  }
}
