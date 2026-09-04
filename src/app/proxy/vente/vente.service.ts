import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VenteDto, VenteSearchDto } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VenteService {
  apiName = 'ventes';
  private api_host: string = environment.api_host + this.apiName;
  myToken = sessionStorage.getItem("token");
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + this.myToken
    })
  }

  constructor(private readonly httpClient: HttpClient) { }

  getAllVentes() {
    return this.httpClient.get<VenteDto[]>(this.api_host, this.httpOptions);
  }

  getVenteById(id: string) {
    const newApiHost = this.routerParam(this.api_host, id);
    return this.httpClient.get<VenteDto>(newApiHost, this.httpOptions);
  }
  findVenteByAgent(search: VenteSearchDto) {
    let new_api_host = this.routerParam(this.api_host, 'searchByPeriode');
    return this.httpClient.post<VenteDto[]>(new_api_host, search, this.httpOptions);
  }

  findByReference(reference: string) {
    let new_api_host = this.routerParam(this.api_host + '/findByReference', reference);
    return this.httpClient.get<VenteDto>(new_api_host, this.httpOptions);
  }
  annulerVente(id: string): Observable<VenteDto> {
    const new_api_host = `${this.api_host}/annulerVente/${id}`;
    return this.httpClient.put<VenteDto>(new_api_host, {}, this.httpOptions);
  }


  createVente(vente: VenteDto) {
    return this.httpClient.post<VenteDto>(this.api_host, vente, this.httpOptions);
  }

  updateVente(id: string, vente: VenteDto) {
    const newApiHost = this.routerParam(this.api_host, id);
    return this.httpClient.put<VenteDto>(newApiHost, vente, this.httpOptions);
  }

  deleteVente(id: string) {
    const newApiHost = this.routerParam(this.api_host, id);
    return this.httpClient.delete(newApiHost, this.httpOptions);
  }

  routerParam(baseUrl, ...params) {
    return `${baseUrl}/${params.join('/')}`;
}
}
