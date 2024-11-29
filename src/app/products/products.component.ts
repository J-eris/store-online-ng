import { Component, Input } from '@angular/core';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() product!: Product;
  @Input() llave!: string;

  constructor(private router: Router) {}

  editarProducto() {
    // console.log('Editar producto con id:', this.llave);
    this.router.navigate(['/editar', this.llave]);
  }
}
