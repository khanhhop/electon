import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.GetAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onDelete(id?: string) {
    if (!id) return;

    const isConfirm = confirm('Are you sure you want to delete?');

    if (isConfirm) {
      this.productService.DeleteProduct(id).subscribe(() => {
        alert('Delete successfully');

        this.products = this.products.filter((it) => it.id !== id);
      });
    }
  }
}
