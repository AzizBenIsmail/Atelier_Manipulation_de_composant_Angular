import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { Test1Component } from './test1/test1.component';
import { FournisseurComponent } from './atelier1/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './atelier1/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './atelier2/list-produits/list-produits.component';
import { UpdateproductComponent } from './Produit/updateproduct/updateproduct.component';
import { RemoveproductComponent } from './Produit/removeproduct/removeproduct.component';
import { AddproductComponent } from './Produit/addproduct/addproduct.component';
import { NavComponent } from './nav/nav.component';
import { DetailproductComponent } from './Produit/detailproduct/detailproduct.component';
import { ShowproductComponent } from './Produit/showproduct/showproduct.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { MainInvoiceComponentComponent } from './Atelier3/main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './Atelier3/invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './Atelier3/invoice-component/invoice-component.component';
import { HeaderComponent } from './header/header.component';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { Workshop7Component } from './workshop7/workshop7.component';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    Test1Component,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent,
    UpdateproductComponent,
    RemoveproductComponent,
    AddproductComponent,
    NavComponent,
    DetailproductComponent,
    ShowproductComponent,
    NotfoundComponent,
    LoginComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent,
    HeaderComponent,
    Workshop7Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    FormsModule,
    LazyLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
