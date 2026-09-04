
import {
    Commande,
    CommandeApprouveRejeter, CommandeGroupe,
    CommandeResultDto,
    CommandeSearch,
    HistoriqueCommande,
    LigneCommande,
    ProduitCommandeRapportDto
} from './models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {StatutCommande} from "../statutCommande";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class CommandeService {
    apiName = 'commande';
    private api_host: string = environment.api_host + this.apiName;

    myToken = sessionStorage.getItem("token");
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + this.myToken
        })
    };

    constructor(private httpClient : HttpClient) { }
    createCommande(commandeCreated: Commande)

    {
        return this.httpClient.post<Commande>(this.api_host,commandeCreated, this.httpOptions);
    }

    updateCommande(id: string, commandeDtoUpdated:Commande):Observable<Commande> {
        let new_api_host=this.routerParam(this.api_host,id);
        return this.httpClient.put<Commande>(new_api_host,commandeDtoUpdated, this.httpOptions);
    }
    diligenterCommande(id: string, commandeDtoUpdated:Commande):Observable<Commande> {
        let new_api_host=this.routerParam(this.api_host,"diligenter",id);
        return this.httpClient.put<Commande>(new_api_host,commandeDtoUpdated, this.httpOptions);
}
approuverCommande(id: string, commandeDtoUpdated:CommandeApprouveRejeter):Observable<Commande> {
    let new_api_host=this.routerParam(this.api_host,"approuver",id);
    return this.httpClient.put<Commande>(new_api_host,commandeDtoUpdated, this.httpOptions);
}
    rejeterCommande(id: string, commandeDtoUpdated:CommandeApprouveRejeter):Observable<Commande> {
        let new_api_host=this.routerParam(this.api_host,"rejeter",id);
        return this.httpClient.put<Commande>(new_api_host,commandeDtoUpdated, this.httpOptions);}
    findById(id: string):Observable<Commande> {
        let new_api_host=this.routerParam(this.api_host,id);
        return this.httpClient.get<Commande>(new_api_host, this.httpOptions);
    }
    findByIdAndCaisseId(id: string, caisseId: string):Observable<Commande> {
        let new_api_host=this.routerParam(this.api_host,id, caisseId);
        return this.httpClient.get<Commande>(new_api_host, this.httpOptions);
    }

    deleteCommande(commandeDeleted:string)
    {

        return this.httpClient.delete<Commande>(this.routerParam(this.api_host,commandeDeleted), this.httpOptions);
    }
    findAllCommandes():Observable<Commande[]> {
        return this.httpClient.get<CommandeResultDto[]>(this.routerParam(this.api_host,"commande"), this.httpOptions);
    }
    findCommandesByCaisseDemandeur(id:string,statusId:string):Observable<Commande[]> {
        let new_api_host=this.routerParam(this.api_host,"findByCaisseDemandeur",id,statusId);
        return this.httpClient.get<CommandeResultDto[]>(new_api_host, this.httpOptions);
    }
    findCommandesByCaisseAlloueur(id:string,statusId:string):Observable<Commande[]> {
        let new_api_host=this.routerParam(this.api_host,"findByCaisseAlloueur",id,statusId);
        return this.httpClient.get<CommandeResultDto[]>(new_api_host, this.httpOptions);
    }
    findCommandesByCaisseDemandeurOnly(id:string):Observable<Commande[]> {
        let new_api_host=this.routerParam(this.api_host,"findByCaisseDemandeur",id);
        return this.httpClient.get<CommandeResultDto[]>(new_api_host, this.httpOptions);
    }
    findCommandesByCaisseAlloueurOnly(id:string):Observable<Commande[]> {
        let new_api_host=this.routerParam(this.api_host,"findByCaisseAlloueur",id);
        return this.httpClient.get<CommandeResultDto[]>(new_api_host, this.httpOptions);
    }
    findCommandesByStructureDemandeur(id:string,statusId:string):Observable<Commande[]> {
        let new_api_host=this.routerParam(this.api_host,"findByStructureDemandeur",id,statusId);
        return this.httpClient.get<CommandeResultDto[]>(new_api_host, this.httpOptions);
    }
    findCommandesByStructureAlloueur(id:string,statusId:string):Observable<Commande[]> {
        let new_api_host=this.routerParam(this.api_host,"findByStructureAlloueur",id,statusId);
        return this.httpClient.get<CommandeResultDto[]>(new_api_host, this.httpOptions);
    }
    findCommandesByCriteres(criteres:CommandeSearch){
        let new_api_host=this.routerParam(this.api_host,"findByCriteria");
        return this.httpClient.post<CommandeResultDto[]>(new_api_host,criteres, this.httpOptions);
    }
    findCommandesByAgent(idUser:string){
        let new_api_host=this.routerParam(this.api_host,"findByAgent",idUser);
        return this.httpClient.get<CommandeResultDto[]>(new_api_host, this.httpOptions);
    }
    createLigneCommande(ligneCommandeCreated: LigneCommande)

    {
        return this.httpClient.post<LigneCommande>( this.api_host+"lignecommande",ligneCommandeCreated, this.httpOptions);
    }

    updateLigneCommande(id: string, ligneCommandeUpdated:LigneCommande):Observable<LigneCommande> {
        return this.httpClient.put<LigneCommande>(this.routerParam(this.api_host,"lignecommande",id),ligneCommandeUpdated, this.httpOptions);
    }
    deleteLigneCommande(ligneCommandeDeleted:string)
    {
        let new_api_host=this.routerParam(this.api_host+"lignecommande",[ligneCommandeDeleted]);
        return this.httpClient.delete<LigneCommande>(new_api_host, this.httpOptions);
    }
    findAllLigneCommandes():Observable<LigneCommande[]> {
        return this.httpClient.get<LigneCommande[]>(this.api_host+"lignecommande",this.httpOptions);
    }

   /* findAllCaisse():Observable<Caisse[]> {
        return this.httpClient.get<Caisse[]>(this.api_host_caisse);
    }*/
        routerParam(baseUrl: string, ...params: (string | string[])[]) {
            return `${baseUrl}/${params.join('/')}`;
        }
    groupLignesByStructureAlloueur(commandeList: any[]): any[] {
        let id=0;
        const grouped = commandeList.reduce((acc, commande) => {
            commande.lignes.forEach(ligne=>{
                const key = ligne.commandeStructureAlloueurId;
                if (!acc[key]) {
                    id=id+1;
                    acc[key] = {
                        id:id,
                        structureAlloueurLibelle:ligne.commandeStructureAlloueurLibelle,
                        structureDemandeurLibelle: ligne.commandeStructureDemandeurLibelle,
                        lignes: []
                    };
                }
                acc[key].lignes.push(ligne);
            })
            return acc;
        }, {});

        return Object.values(grouped);
    }
    groupLignesByStructureDemandeur(commandeList: any[]): any[] {
        let id=0;
        const grouped = commandeList.reduce((acc, commande) => {
            commande.lignes.forEach(ligne=>{
                const key = ligne.commandeStructureDemandeurId;
                if (!acc[key]) {
                    id=id+1;
                    acc[key] = {
                        id:id,
                        structureDemandeurLibelle: ligne.commandeStructureDemandeurLibelle,
                        structureAlloueurLibelle:ligne.commandeStructureAlloueurLibelle,
                        lignes: []
                    };
                }

                acc[key].lignes.push(ligne);
            })
            return acc;
        }, {});

        return Object.values(grouped);
    }
    seachCommandProduit(criteres:CommandeSearch){
        let new_api_host=this.routerParam(this.api_host,"search-by-produit");
        return this.httpClient.post<ProduitCommandeRapportDto[]>(new_api_host,criteres, this.httpOptions);
    }
    recupererProduits(id: string, commandeDtoUpdated:CommandeApprouveRejeter):Observable<Commande> {
        let new_api_host=this.routerParam(this.api_host,"recuperer",id);
        return this.httpClient.put<Commande>(new_api_host,commandeDtoUpdated, this.httpOptions);
    }
    findCommandesByStructureAlloueurOnly(id:string):Observable<CommandeGroupe[]> {
        let new_api_host=this.routerParam(this.api_host,"findByStructureAlloueur",id);
        return this.httpClient.get<CommandeGroupe[]>(new_api_host, this.httpOptions);
    }
    getByStatutId(statutId:string)
    {
        let new_api_host = this.routerParam(this.api_host,"findByStatut",statutId);
        return this.httpClient.get<Commande[]>(new_api_host,this.httpOptions);
    }
}
