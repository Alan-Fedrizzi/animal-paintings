import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterdProducts: Product[] = [];
  sortOrder: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filterdProducts = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      // verificar se deu sucesso, se deu next
      next: () => {
        // method) _MatSnackBarBase.open(message: string, action?: string | undefined, config?: MatSnackBarConfig<any> | undefined): MatSnackBarRef<TextOnlySnackBar>
        this.snackbar.open('Product added to cart!', '', {
          duration: 2_000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filterdProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string) {
    this.sortOrder = sortValue;

    if (this.sortOrder === 'priceLowHigh') {
      this.filterdProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'priceHighLow') {
      this.filterdProducts.sort((a, b) => b.price - a.price);
    }
  }
}
