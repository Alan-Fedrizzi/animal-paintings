import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
