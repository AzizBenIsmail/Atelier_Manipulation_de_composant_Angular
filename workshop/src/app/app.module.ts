import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { Test1Component } from './test1/test1.component';
import { FournisseurComponent } from './atelier1/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './atelier1/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './atelier2/list-produits/list-produits.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    Test1Component,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
