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
  llaveProducto: string | null = null;
  descriptionInput: string = '';
  priceInput: number | null = null;

  constructor(
    private productService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const llave = this.route.snapshot.paramMap.get('llave');
    if (llave) {
      const product = this.productService.getProductByLlave(llave);
      if (product) {
        this.llaveProducto = llave;
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

    const newProduct = new Product(this.descriptionInput, this.priceInput);
    this.productService.guardarProducto(newProduct, this.llaveProducto);

    // Clear inputs
    this.limpiarFormulario();
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }

  eliminarProducto() {
    if (this.llaveProducto !== null) {
      this.productService.eliminarProducto(this.llaveProducto);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario() {
    this.llaveProducto = null;
    this.descriptionInput = '';
    this.priceInput = null;
  }
}
