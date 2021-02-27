import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  iconSate: boolean = false;
  innerWidth: number;
  state$: Observable<object>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    if (Object.keys(this.data).length === 0) {
      this.state$ = this.activatedRoute.paramMap
        .pipe(map(() => window.history.state))
      this.state$.subscribe(data => this.data = data);
    }
  }

  public toggleIcons() {
    this.iconSate = !this.iconSate
  }
  public closeModal() {
    this.dialog.closeAll();
  }
  public goBack() {
    this.router.navigate(['']);
  }
}
