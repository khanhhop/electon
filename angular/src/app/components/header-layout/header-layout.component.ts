import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css',
})
export class HeaderLayoutComponent {
  router = new Router();

  searchForm = new FormGroup({
    searchStr: new FormControl(''),
  });

  onNavigate() {
    this.router.navigate(['products'], {
      queryParams: {
        search: this.searchForm.value.searchStr,
      },
    });
  }
}
