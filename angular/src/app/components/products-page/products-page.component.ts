import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { ICategory } from '../../interfaces/category';
import { IProduct } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  categories: ICategory[] = [];
  products: IProduct[] = [];
  totalProduct = 0;
  idsChecked: any[] = [];
  searchStr = '';

  ngOnInit() {
    this.searchStr = this.route.snapshot.queryParams['search'];

    this.fetchCategories();
    this.fetchProducts();
  }

  fetchCategories() {
    this.categoryService
      .GetAllCategories({
        _embed: 'products',
      })
      .subscribe(
        (res) => {
          this.categories = res;

          res.forEach((cate) => {
            this.totalProduct += cate.products.length;
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  fetchProducts(params?: any) {
    this.productService
      .GetAllProducts({ ...params, name_like: this.searchStr })
      .subscribe(
        (res) => {
          this.products = res;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onCheckboxChange(e: any) {
    const value: any = e.target.value;

    if (value === 'all') {
      this.idsChecked = this.categories.map((it) => it.id);
    } else {
      if (this.idsChecked.includes(value)) {
        this.idsChecked = this.idsChecked.filter((it) => it !== value);
      } else {
        this.idsChecked.push(value);
      }
    }

    this.fetchProducts({
      categoryId: this.idsChecked,
    });
  }

  onReset() {
    this.idsChecked = [];

    this.fetchProducts();
  }
}
