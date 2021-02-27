import { NgModule }                       from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';
import { ProductPageComponent }           from './components/product-page/product-page.component'
import { ProductDetailsComponent }        from './components/product-details/product-details.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: ProductPageComponent
  },
  {
    path:'details',
    pathMatch:'full',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
