import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Product } from '../products/product.model';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from '../formulario/formulario.component';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductsComponent, FormsModule, FormularioComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.products;
  }

  addProducts() {
    this.router.navigate(['/agregar']);
  }
}
