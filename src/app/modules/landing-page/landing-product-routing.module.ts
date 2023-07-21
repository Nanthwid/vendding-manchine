import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './component/list-product/list-product.component';
import { LandingPageModule } from './landing-page.module';




const routes: Routes = [
  {
    path: 'test',
    component: ListProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingPageRoutingModule {}