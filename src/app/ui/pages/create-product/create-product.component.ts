import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  productName!: string;
  price!: number;
  description!: string;

  constructor(
    private productService: ProductService
  ) {}

  createProduct(): void {
    const productData = {
      productName: this.productName,
      price: this.price,
      description: this.description
    };

    this.productService.createProduct(productData)
    .subscribe((response) => console.log('Product created successfully', response));
  }
}
