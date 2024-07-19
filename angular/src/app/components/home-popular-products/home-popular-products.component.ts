import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../interfaces/category';

@Component({
  selector: 'app-home-popular-products',
  templateUrl: './home-popular-products.component.html',
  styleUrl: './home-popular-products.component.css',
})
export class HomePopularProductsComponent {
  products: IProduct[] = [];
  categories: ICategory[] = [];
  currentCategoryId!: string;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.GetAllCategories().subscribe(
      (data) => {
        this.categories = data;
        const firstCategoryId = data[0].id as string;
        this.currentCategoryId = firstCategoryId;

        this.fetchProducts(firstCategoryId);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchProducts(categoryId: string) {
    this.productService.GetAllProducts({ categoryId }).subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onClickCategory(id: any) {
    this.currentCategoryId = id;
    this.fetchProducts(id);
  }
}
