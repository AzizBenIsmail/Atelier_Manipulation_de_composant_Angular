import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponentComponent } from './Atelier3/invoice-component/invoice-component.component';
import { InvoiceListComponentComponent } from './Atelier3/invoice-list-component/invoice-list-component.component';
import { MainInvoiceComponentComponent } from './Atelier3/main-invoice-component/main-invoice-component.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddproductComponent } from './Produit/addproduct/addproduct.component';
import { DetailproductComponent } from './Produit/detailproduct/detailproduct.component';
import { RemoveproductComponent } from './Produit/removeproduct/removeproduct.component';
import { ShowproductComponent } from './Produit/showproduct/showproduct.component';
import { UpdateproductComponent } from './Produit/updateproduct/updateproduct.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Workshop7Component } from './workshop7/workshop7.component';


const routes: Routes = [
 // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'Reactive', pathMatch: 'full' },
  { path: 'login', component: LoginComponent ,data:{title : 'titrespecial'} },
  { path: 'work', component: Workshop7Component },
  { path: 'Reactive', component: ReactiveformComponent },
  { path: 'invoice', component: InvoiceComponentComponent },
  { path: 'list/:id/:a/:b', component: InvoiceListComponentComponent },
  { path: 'maininvoice', component: MainInvoiceComponentComponent }, 
  { path: 'add', component: AddproductComponent },
  { path: 'add', component: AddproductComponent },

  {
    path: 'Product',
    component: ShowproductComponent,
    children: [
      { path: 'remove/:id', component: RemoveproductComponent },
      { path: 'detail', component: DetailproductComponent },
      { path: 'update', component: UpdateproductComponent },
      { path: 'add', component: AddproductComponent },
    ],
  },
  { path: 'Admin', loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule) },
  { path: 'LazyLoading', loadChildren:()=>import('./lazy-loading/lazy-loading.module').then((m)=>m.LazyLoadingModule) },
  { path: '**', component: NotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
