import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class ProductModule {}
