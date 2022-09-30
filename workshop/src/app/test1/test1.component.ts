import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }
  products = [
    {idProduit:1,code:"P147852P",libelle:"hp", prixUnitaire:12.5, tauxTVA:0.02},
    {idProduit:2,code:"P147552P",libelle:"hp", prixUnitaire:30, tauxTVA:0.1980},
    {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
    {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
    {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
    ]
  ngOnInit(): void {
  }



  changeClass(){
    if(this.products[0].libelle=='hp'){
      return 'btn btn-success'
    }
    return 'btn btn-danger '

  }

}
