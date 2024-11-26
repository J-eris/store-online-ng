import { Component } from '@angular/core';
import { Product } from '../products/product.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  productId: number | null = null;
  descriptionInput: string = '';
  priceInput: number | null = null;

  constructor(
    private productService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = parseInt(id);
      const product = this.productService.getProductById(this.productId);
      if (product) {
        this.productId = product.id;
        this.descriptionInput = product.description;
        this.priceInput = product.price;
      }
    }
  }

  guardarProducto(event: Event) {
    event.preventDefault();
    if (
      this.descriptionInput.trim() === '' ||
      this.priceInput === null ||
      this.priceInput <= 0
    ) {
      console.log('Debe ingresar una descripción y un precio válido');
      return;
    }

    const newProduct = new Product(
      this.productId,
      this.descriptionInput,
      this.priceInput
    );
    this.productService.guardarProducto(newProduct);

    // Clear inputs
    this.limpiarFormulario();
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }

  eliminarProducto() {
    if (this.productId !== null) {
      this.productService.eliminarProducto(this.productId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario() {
    this.productId = null;
    this.descriptionInput = '';
    this.priceInput = null;
  }
}
