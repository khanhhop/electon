import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../../interfaces/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { IProduct } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  categories: ICategory[] = [];

  router = new Router();

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  productId = this.route.snapshot.params['id'];

  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl(''),
    image: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.categoryService.GetAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.productService.GetProductById(this.productId).subscribe((data) => {
      this.editForm.controls.name.setValue(data.name);
      this.editForm.controls.price.setValue(data.price as any);
      this.editForm.controls.description.setValue(data?.description);
      this.editForm.controls.image.setValue(data.image);
      this.editForm.controls.categoryId.setValue(data.categoryId);
    });
  }

  onUpdate() {
    this.productService
      .UpdateProduct(this.productId, this.editForm.value as IProduct)
      .subscribe(
        () => {
          alert('Update product successfully');
          this.router.navigate(['/admin/products']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
