import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import necessário para diretivas como *ngFor
import { ProductsService } from '../../shared/service/products.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule], // Inclua o CommonModule aqui
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'] // Corrigido o nome da propriedade (styleUrls)
})
export class ListComponent {
  products: any[] = [];

  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}

