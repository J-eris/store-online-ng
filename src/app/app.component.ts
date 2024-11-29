import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListProductsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tienda Online';

  constructor(private loginService: LoginService) {}

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  logout() {
    this.loginService.logout();
  }
}
