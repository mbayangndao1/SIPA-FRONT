import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import type {Categorie} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
    private api_host: string= environment.api_host;

    private api_host_categorie=this.api_host+"categorie";
    myToken = sessionStorage.getItem("token");
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            "Authorization" : "Bearer "+this.myToken
        })
    }
    constructor(private readonly httpClient : HttpClient) { }
    findAllCategories()
    {
        return this.httpClient.get<Categorie[]>(this.api_host_categorie,this.httpOptions);
    }
    createCategorie(categorieCreated: Categorie)
    {
        return this.httpClient.post<Categorie>(this.api_host_categorie,categorieCreated,this.httpOptions);
    }
    updateCategorie(id:any, categorieUpdated:Categorie)
    {
        let new_api_host = this.routerParam(this.api_host_categorie,id);
        return this.httpClient.put<Categorie>(new_api_host,categorieUpdated,this.httpOptions);
    }
    deleteCategorie(categorieDeleted:any)
    {
        let new_api_host = this.routerParam(this.api_host_categorie,categorieDeleted);
        return this.httpClient.delete(new_api_host,this.httpOptions);
    }

    findCategorieByLibelle() {
        const url = `${this.api_host_categorie}/GetAllCategorieTimbre`;
        return this.httpClient.get<Categorie>(url);
      }
    getOneCategorieById(id:string)
    {
        let new_api_host = this.routerParam(this.api_host_categorie,id);
        return this.httpClient.get<Categorie>(new_api_host,this.httpOptions);
    }


    routerParam(host:string, param: string){
        return host + "/" + param;
    }
}
