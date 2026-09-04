export interface VenteDto {
  id?: number;
  reference?: string;
  montant: number;
  montantRecu: number;
  reduction: number;
  modePaiementId: number;
  nombre: number;
  rendu: number;
  annule?: boolean;
  clientId?: number;
  userId?: number;
  journalId?: number;
  structureId?:number;
  structureLibelle?:string;
  caisseId?: number;
  createdAt?: string;
  details?: DetailsVente[];
  suivis?: HistoriqueVente[];
}

export interface HistoriqueVente {
  id: number;
  structureId: string;
  agent: string;
  venteId?: string;
  commentaire: string;
  createdAt?: string;
}

export interface DetailsVente {
  // id: number;
  produitId: string;
  produitLibelle?: string;
  typeProduitLibelle?: string;
  produitCategorieId?: string;
  produitCategorieLibelle?: string;
  produitCodeBarre?: string;
  typeProduitId?: number;
  quantite: number;
  produitPrix?: number;
  venteId?: number;
}

export class VenteSearchDto {
  debut?: string;
  fin?: string;
  reference?:string;
  userId: number;
  // typeProduitId: number;
  // structureId: number;
}
