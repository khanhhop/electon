import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { FooterLayoutComponent } from './components/footer-layout/footer-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomePopularProductsComponent } from './components/home-popular-products/home-popular-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BannerAdsComponent } from './components/banner-ads/banner-ads.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { FeedbackItemComponent } from './components/feedback-item/feedback-item.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    FooterLayoutComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    CartPageComponent,
    HomeBannerComponent,
    HomePopularProductsComponent,
    ProductItemComponent,
    BannerAdsComponent,
    HomeNewsComponent,
    NewsItemComponent,
    FeedbackItemComponent,
    ProductListComponent,
    ProductAddComponent,
    CategoryListComponent,
    CategoryAddComponent,
    ClientComponent,
    AdminComponent,
    ProductEditComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
