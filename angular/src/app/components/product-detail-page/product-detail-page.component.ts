import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  productData!: IProduct;
  id = this.route.snapshot.params['id'];

  ngOnInit() {
    this.fetchProductDetail();
  }

  fetchProductDetail() {
    this.productService.GetProductById(this.id).subscribe(
      (product) => {
        this.productData = product;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
