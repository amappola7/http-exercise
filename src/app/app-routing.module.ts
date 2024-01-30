import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { CreateProductComponent } from './ui/pages/create-product/create-product.component';
import { adminGuard } from './ui/pages/guards/admin.guard';

const routes: Routes = [
  {path:'product/create', component:CreateProductComponent,
  canActivate:[adminGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
