import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../service/app.layout.service";

@Component({
  selector: 'client-menu',
  templateUrl: './client.menu.component.html'
})
export class ClientMenuComponent implements OnInit{
    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'CLIENT',
                items: [
                    { label: 'Choix Module', icon: 'pi pi-fw pi-home', url: 'https://digitalpostv2.sn.post/' }
                ],
            },
            {label: 'Gestion du stock ',
                items: [
                    {label: 'Mon stock',  icon: 'pi pi-fw pi-plus', routerLink: ['/client/stock']},
                    {label: 'Point Vente',  icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/client/vente']},
                    {label: 'Vente Figurine Postale',  icon: 'pi pi-shopping-cart', routerLink: ['/client/vente-timbre']}
                ]},
            {label: 'Gestion des commandes',
                items: [
                    {label: 'Passer commande',  icon: 'pi pi-fw pi-cart-plus', routerLink: ['/client/passer-commande']},
                    {label: 'Mes commandes',  icon: 'pi pi-fw pi-list', routerLink: ['/client/mes-commandes']},
                    // {label: 'Diligenter commande',  icon: 'pi pi-fw pi-pencil', routerLink: ['/client/diligenter-commande']},
                    {label: 'Approuver commande',  icon: 'pi pi-fw pi-pencil', routerLink: ['/client/approuver-commande']}
                ]},
            {
                label: 'Gestion des ventes',
                items: [
                    { label: 'Point de Vente', icon: 'pi pi-shopping-cart', routerLink: ['/client/vente'] },
                    { label: 'Vente de timbre', icon: 'pi pi-shopping-cart', routerLink: ['/client/vente-timbre'] },
                ]
            },
            {label: 'Gestion des retours produits',
                items: [
                    {label: 'Retourner produit',  icon: 'pi pi-fw pi-minus', routerLink: ['/client/retourner-produit']},
                    {label: 'Mes produits retournés',  icon: 'pi pi-fw pi-list', routerLink: ['/client/mes-produits-retournes']},
                    // {label: 'Diligenter retour produits',  icon: 'pi pi-fw pi-pencil', routerLink: ['/client/diligenter-retour-produits']},
                    {label: 'Approuver retour produits',  icon: 'pi pi-fw pi-pencil', routerLink: ['/client/approuver-retour-produits']}
                ]}
            ,
            {label: 'Gestion des rapports',
                items: [
                    {label: 'Rapports des Ventes',  icon: 'pi pi-fw pi-file', routerLink: ['/client/rapport-ventes']},
                    {label: 'Rapports des commandes',  icon: 'pi pi-fw pi-file', routerLink: ['/client/rapports-commandes']},
                    {label: 'Rapports des retours produits',  icon: 'pi pi-fw pi-file', routerLink: ['/client/rapports-retour-produits']}

                ]}

        ];
    }

}
