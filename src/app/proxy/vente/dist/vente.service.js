"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VenteService = void 0;
var environment_1 = require("src/environments/environment");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var VenteService = /** @class */ (function () {
    function VenteService(httpClient) {
        this.httpClient = httpClient;
        this.apiName = 'ventes';
        this.api_host = environment_1.environment.api_host + this.apiName;
        this.myToken = sessionStorage.getItem("token");
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + this.myToken
            })
        };
    }
    VenteService.prototype.getAllVentes = function () {
        return this.httpClient.get(this.api_host, this.httpOptions);
    };
    VenteService.prototype.getVenteById = function (id) {
        var newApiHost = this.routerParam(this.api_host, id);
        return this.httpClient.get(newApiHost, this.httpOptions);
    };
    VenteService.prototype.findVenteByAgent = function (search) {
        var new_api_host = this.routerParam(this.api_host, 'searchByPeriode');
        return this.httpClient.post(new_api_host, search, this.httpOptions);
    };
    VenteService.prototype.findByReference = function (reference) {
        var new_api_host = this.routerParam(this.api_host + '/findByReference', reference);
        return this.httpClient.get(new_api_host, this.httpOptions);
    };
    VenteService.prototype.annulerVente = function (id) {
        var new_api_host = this.api_host + "/annulerVente/" + id;
        return this.httpClient.put(new_api_host, this.httpOptions);
    };
    VenteService.prototype.createVente = function (vente) {
        return this.httpClient.post(this.api_host, vente, this.httpOptions);
    };
    VenteService.prototype.updateVente = function (id, vente) {
        var newApiHost = this.routerParam(this.api_host, id);
        return this.httpClient.put(newApiHost, vente, this.httpOptions);
    };
    VenteService.prototype.deleteVente = function (id) {
        var newApiHost = this.routerParam(this.api_host, id);
        return this.httpClient["delete"](newApiHost, this.httpOptions);
    };
    VenteService.prototype.routerParam = function (host, param) {
        return host + "/" + param;
    };
    VenteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], VenteService);
    return VenteService;
}());
exports.VenteService = VenteService;
