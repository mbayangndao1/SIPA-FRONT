import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StatutCommande} from "./models";

@Injectable({
  providedIn: 'root'
})
export class StatutCommandeService {
    private api_host: string= environment.api_host;

    private api_host_statutCommande=this.api_host+"statutcommande";
    myToken = sessionStorage.getItem("token");
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            "Authorization" : "Bearer "+this.myToken
        })
    }
    constructor(private readonly httpClient : HttpClient) { }
    findAllStatutCommandes()
    {
        return this.httpClient.get<StatutCommande[]>(this.api_host_statutCommande,this.httpOptions);
    }
    createStatutCommande(statutCommandeCreated: StatutCommande)
    {
        return this.httpClient.post<StatutCommande>(this.api_host_statutCommande,statutCommandeCreated,this.httpOptions);
    }
    updateStatutCommande(id:any, statutCommandeUpdated:StatutCommande)
    {
        let new_api_host = this.routerParam(this.api_host_statutCommande,id);
        return this.httpClient.put<StatutCommande>(new_api_host,statutCommandeUpdated,this.httpOptions);
    }
    deleteStatutCommande(statutCommandeDeleted:any)
    {
        let new_api_host = this.routerParam(this.api_host_statutCommande,statutCommandeDeleted);
        return this.httpClient.delete(new_api_host,this.httpOptions);
    }


    getOneStatutCommandeById(id:string)
    {
        let new_api_host = this.routerParam(this.api_host_statutCommande,id);
        return this.httpClient.get<StatutCommande>(new_api_host,this.httpOptions);
    }


    routerParam(host:string, param: string){
        return host + "/" + param;
    }
    getSeverity(statusLibelle: string): { color: string; severity: string } {
            const statusMap: { [key: string]: { color: string; severity: string } } = {
                'EN ATTENTE': { color: '#6c757d', severity: 'secondary' },
                'DILIGENTEE': { color: '#17a2b8', severity: 'info' },
                'APPROUVEE': { color: '#28a745', severity: 'success' },
                'RETOURNEE': { color: '#ffc107', severity: 'warning' },
                'REJETEE': { color: '#dc3545', severity: 'danger' }, // Ajout d'un cas rejeté
                'RECUPEREE': { color: '#28a745', severity: 'success' }
            };

            // Normalisation du statut (suppression des espaces et conversion en majuscules)
            const normalizedStatus = this.nettoyeMot(statusLibelle).toUpperCase();
            return statusMap[normalizedStatus] || { color: '#FFC107', severity: 'warning' }; // Valeur par défaut
        }
    getNormalizedStatus(statusLibelle: string): string {
        const specialStatuses = ['EN ATTENTE', 'DILIGENTEE', 'APPROUVEE', 'RETOURNEE','RECUPEREE','REJETEE'];
        return specialStatuses.includes(statusLibelle) ? statusLibelle : 'Traitement en cours';
    }
    existsByLibelle(libelle: string) {
        let new_api_host = this.routerParam(this.api_host_statutCommande,"exists-by-libelle");
        return this.httpClient.post<boolean>(new_api_host,libelle,this.httpOptions);
    }
    estCommandeAttente(statut:StatutCommande){
        let statutFormate=this.nettoyeMot(statut.libelle);
        switch (statutFormate) {
            case "attente":
            case "en attente":
            case "envoyee":
            case "envoye":
            case "en cours":
                return true;
            case "en cours de traitement":
                return true;
            default:
                return false;
        }
    }
    estCommandeDiligentee(statut:StatutCommande){
        let statutFormate=this.nettoyeMot(statut.libelle);
        switch (statutFormate) {
            case "diligentee":
            case "diligente":
            case "traite":
            case "traitee":
                return true;
            default:
                return false;
        }
    }
    estCommandeRejetee(statut:StatutCommande){
        let statutFormate=this.nettoyeMot(statut.libelle);
        switch (statutFormate) {
            case "rejetee":
            case "rejete":
            case "refusee":
            case "refuse":
                return true;
            default:
                return false;
        }
    }
    estCommandeRecuperee(statut:StatutCommande){
        let statutFormate=this.nettoyeMot(statut.libelle);
        switch (statutFormate) {
            case "recuperee":
            case "recupere":
            case "reprise":
            case "repris":
                return true;
            default:
                return false;
        }
    }
    estCommandeApprouvee(statut:StatutCommande){
        let statutFormate=this.nettoyeMot(statut.libelle);
        switch (statutFormate) {
            case "approuvee":
            case "approuve":
            case "acceptee":
            case "accepte":
                return true;
            default:
                return false;
        }
    }
    nettoyeMot(statut: string): string {
        if (!statut) return '';
        return statut
            .normalize("NFD")                        // Supprime les accents
            .replace(/[\u0300-\u036f]/g, "")         // Supprime les diacritiques
            .replace(/\s+/g, ' ')
            //.replace(/[^a-z\s]/g, "")
            .trim() //Remplacer plusieurs espace par un seul espace
            // Supprime les espaces
            .toLowerCase();                          // Met en minuscule (optionnel)
    }
    }
