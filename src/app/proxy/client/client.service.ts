import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import type {Client} from "./models";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private api_host: string= environment.api_host;

    private api_host_client=this.api_host+"client";
    myToken = sessionStorage.getItem("token");
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            "Authorization" : "Bearer "+this.myToken
        })
    }
    constructor(private readonly httpClient : HttpClient) { }
    findAllClients()
    {
        return this.httpClient.get<Client[]>(this.api_host_client,this.httpOptions);
    }
    createClient(clientCreated: Client)
    {
        return this.httpClient.post<Client>(this.api_host_client,clientCreated,this.httpOptions);
    }
    updateClient(id:any, clientUpdated:Client)
    {
        let new_api_host = this.routerParam(this.api_host_client,id);
        return this.httpClient.put<Client>(new_api_host,clientUpdated,this.httpOptions);
    }
    deleteClient(clientDeleted:any)
    {
        let new_api_host = this.routerParam(this.api_host_client,clientDeleted);
        return this.httpClient.delete(new_api_host,this.httpOptions);
    }


    findClientById(id:string)
    {
        let new_api_host = this.routerParam(this.api_host_client,id);
        return this.httpClient.get<Client>(new_api_host,this.httpOptions);
    }
    findClientByTelephone(telephone:number)
    {
        let new_api_host = `${this.api_host_client}/telephone?telephone=${telephone}`;

        return this.httpClient.get<Client>(new_api_host,this.httpOptions);
    }

    findClientsByAdresse(adresse:string)
    {
        let new_api_host = `${this.api_host_client}/adresse?adresse=${adresse}`;

        return this.httpClient.get<Client[]>(new_api_host,this.httpOptions);
    }
    findClientsByNom(nom:string)
    {
        let new_api_host = `${this.api_host_client}/nom?nom=${nom}`;

        return this.httpClient.get<Client[]>(new_api_host,this.httpOptions);
    }
    routerParam(host:string, param: string){
        return host + "/" + param;
    }
}
