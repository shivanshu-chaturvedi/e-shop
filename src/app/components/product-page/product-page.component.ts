import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import mock_data from "src/app/mock/mock-data.json";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  innerWidth: number;
  items: any = mock_data;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.dialog.closeAll();
  }
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  openDialog(data) {
    this.dialog.open(ProductDetailsComponent, {
      data: data,
      width: this.innerWidth > 1024 ? '40.8%' : '90%',
      height: this.innerWidth > 1024 ? '500px' : '500px',
    });
  }
}
