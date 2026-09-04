import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TypeProduit} from "./models";

@Injectable({
  providedIn: 'root'
})
export class TypeProduitService {
    constructor(private readonly httpClient : HttpClient) { }
    private api_host: string= environment.api_host;
    private api_host_typeProduit=this.api_host+"typeproduit";
    myToken = sessionStorage.getItem("token");
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            "Authorization" : "Bearer "+this.myToken
        })
    }

    findAllTypeProduits()
    {
        return this.httpClient.get<TypeProduit[]>(this.api_host_typeProduit,this.httpOptions);
    }
    createTypeProduit(typeproduitCreated: TypeProduit)
    {
        return this.httpClient.post<TypeProduit>(this.api_host_typeProduit,typeproduitCreated,this.httpOptions);
    }
    updateTypeProduit(id:any, typeproduitUpdated:TypeProduit)
    {
        let new_api_host = this.routerParam(this.api_host_typeProduit,id);
        return this.httpClient.put<TypeProduit>(new_api_host,typeproduitUpdated,this.httpOptions);
    }
    deleteTypeProduit(typeProduitDeleted:any)
    {
        let new_api_host = this.routerParam(this.api_host_typeProduit,typeProduitDeleted);
        return this.httpClient.delete(new_api_host,this.httpOptions);
    }


    getOneTypeProduitById(id:string)
    {
        let new_api_host = this.routerParam(this.api_host_typeProduit,id);
        return this.httpClient.get<TypeProduit>(new_api_host,this.httpOptions);
    }


    routerParam(host:string, param: string){
        return host + "/" + param;
    }
}
