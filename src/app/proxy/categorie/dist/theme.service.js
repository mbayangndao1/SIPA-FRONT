"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategorieService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../../../environments/environment");
var http_1 = require("@angular/common/http");
var CategorieService = /** @class */ (function () {
    function CategorieService(httpClient) {
        this.httpClient = httpClient;
        this.api_host = environment_1.environment.api_host;
        this.api_host_categorie = this.api_host + "categorie";
        this.myToken = sessionStorage.getItem("token");
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + this.myToken
            })
        };
    }
    CategorieService.prototype.findAllCategories = function () {
        return this.httpClient.get(this.api_host_categorie, this.httpOptions);
    };
    CategorieService.prototype.createCategorie = function (categorieCreated) {
        return this.httpClient.post(this.api_host_categorie, categorieCreated, this.httpOptions);
    };
    CategorieService.prototype.updateCategorie = function (id, categorieUpdated) {
        var new_api_host = this.routerParam(this.api_host_categorie, id);
        return this.httpClient.put(new_api_host, categorieUpdated, this.httpOptions);
    };
    CategorieService.prototype.deleteCategorie = function (categorieDeleted) {
        var new_api_host = this.routerParam(this.api_host_categorie, categorieDeleted);
        return this.httpClient["delete"](new_api_host, this.httpOptions);
    };
    CategorieService.prototype.findCategorieByLibelle = function () {
        var url = this.api_host_categorie + "/GetAllCategorieTimbre";
        return this.httpClient.get(url);
    };
    CategorieService.prototype.getOneCategorieById = function (id) {
        var new_api_host = this.routerParam(this.api_host_categorie, id);
        return this.httpClient.get(new_api_host, this.httpOptions);
    };
    CategorieService.prototype.routerParam = function (host, param) {
        return host + "/" + param;
    };
    CategorieService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CategorieService);
    return CategorieService;
}());
exports.CategorieService = CategorieService;
