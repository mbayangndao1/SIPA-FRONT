"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientMenuComponent = void 0;
var core_1 = require("@angular/core");
var ClientMenuComponent = /** @class */ (function () {
    function ClientMenuComponent(layoutService) {
        this.layoutService = layoutService;
        this.model = [];
    }
    ClientMenuComponent.prototype.ngOnInit = function () {
        this.model = [
            {
                label: 'CLIENT',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/client'] }
                ]
            },
            {
                label: 'Gestion du stock',
                items: [
                    { label: 'Mon stock', icon: 'pi pi-fw pi-box', routerLink: ['/client/stock'] }
                ]
            },
            {
                label: 'Gestion des commandes',
                items: [
                    { label: 'Passer commande', icon: 'pi pi-fw pi-plus', routerLink: ['/client/passer-commande'] },
                    { label: 'Mes commandes', icon: 'pi pi-fw pi-list', routerLink: ['/client/mes-commandes'] },
                    { label: 'Diligenter commande', icon: 'pi pi-fw pi-pencil', routerLink: ['/client/diligenter-commande'] },
                    { label: 'Approuver commande', icon: 'pi pi-fw pi-check', routerLink: ['/client/approuver-commande'] }
                ]
            },
            {
                label: 'Gestion des ventes',
                items: [
                    { label: 'Point de Vente', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/client/vente'] },
                    { label: 'Vente de timbre', icon: 'pi pi-fw pi-tag', routerLink: ['/client/vente-timbre'] }
                ]
            },
            {
                label: 'Gestion des retours produits',
                items: [
                    { label: 'Retourner produit', icon: 'pi pi-fw pi-replay', routerLink: ['/client/retourner-produit'] },
                    { label: 'Mes produits retournés', icon: 'pi pi-fw pi-list', routerLink: ['/client/mes-produits-retournes'] },
                    { label: 'Diligenter retour produits', icon: 'pi pi-fw pi-pencil', routerLink: ['/client/diligenter-retour-produits'] },
                    { label: 'Approuver retour produits', icon: 'pi pi-fw pi-check', routerLink: ['/client/approuver-retour-produits'] }
                ]
            },
            {
                label: 'Gestion des rapports',
                items: [
                    { label: 'Rapports des commandes', icon: 'pi pi-fw pi-file', routerLink: ['/client/rapports-commandes'] },
                    { label: 'Rapports des retours produits', icon: 'pi pi-fw pi-file', routerLink: ['/client/rapports-retour-produits'] },
                    { label: 'Rapport des ventes', icon: 'pi pi-fw pi-file', routerLink: ['/client/rapport-ventes'] }
                ]
            }
        ];
    };
    ClientMenuComponent = __decorate([
        core_1.Component({
            selector: 'client-menu',
            templateUrl: './responsable-annexe.menu.component.html'
        })
    ], ClientMenuComponent);
    return ClientMenuComponent;
}());
exports.ClientMenuComponent = ClientMenuComponent;
