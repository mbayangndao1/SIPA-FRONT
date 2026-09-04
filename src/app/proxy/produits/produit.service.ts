
import type { Produit } from './models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private api_host: string = environment.api_host;

  private api_host_produit = this.api_host + "produit";
  myToken = sessionStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + this.myToken
    })
  }
  constructor(private readonly httpClient: HttpClient) { }
  findAllProduits() {
    return this.httpClient.get<Produit[]>(this.api_host_produit, this.httpOptions);
  }
  findProduitsByType(id: string) {
    let new_api_host = this.routerParam(this.api_host_produit + "/findByType", id);
    return this.httpClient.get<Produit[]>(new_api_host, this.httpOptions);
  }
    findProduitsByCategorie(id: string) {
        let new_api_host = this.routerParam(this.api_host_produit + "/findByCategorie", id);
        return this.httpClient.get<Produit[]>(new_api_host, this.httpOptions);
    }
    findProduitsByTypeAndCategorie(idType: string,idCategorie:string) {
        let new_api_host =this.routerParam(this.api_host_produit + "/findByTypeAndCategorie", idType);
        return this.httpClient.get<Produit[]>(this.routerParam(new_api_host,idCategorie), this.httpOptions);
    }
  createProduit(produitCreated: Produit) {
    return this.httpClient.post<Produit>(this.api_host_produit, produitCreated, this.httpOptions);
  }
  updateProduit(id: any, produitUpdated: Produit) {
    let new_api_host = this.routerParam(this.api_host_produit, id);
    return this.httpClient.put<Produit>(new_api_host, produitUpdated, this.httpOptions);
  }
  deleteProduit(produitDeleted: any) {
    let new_api_host = this.routerParam(this.api_host_produit, produitDeleted);
    return this.httpClient.delete(new_api_host, this.httpOptions);
  }

  findProduitByCodeBarre(codeBarre: string): Observable<Produit> {
    let new_api_host_stock = this.routerParam(this.api_host_produit, 'by-code-barre/' + codeBarre);
    return this.httpClient.get<Produit>(new_api_host_stock);
}

  getOneProduitById(id: string) {
    let new_api_host = this.routerParam(this.api_host_produit, id);
    return this.httpClient.get<Produit>(new_api_host, this.httpOptions);
  }


  routerParam(host: string, param: string) {
    return host + "/" + param;
  }
}
