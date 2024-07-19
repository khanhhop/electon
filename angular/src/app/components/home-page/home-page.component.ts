import { Component } from '@angular/core';
import { ICategory } from '../../interfaces/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  feedbacks = [
    {
      id: 1,
      name: 'Savannah Nguyen',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      avatar: 'assets/feedback-1.png',
    },
    {
      id: 2,
      name: 'Esther Howard',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      avatar: 'assets/feedback-2.png',
    },
    {
      id: 3,
      name: 'Esther Howard',
      content:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      avatar: 'assets/feedback-3.png',
    },
  ];

  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.GetAllCategories({ _embed: 'products' }).subscribe(
      (res) => {
        this.categories = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
