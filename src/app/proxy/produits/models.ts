import { Categorie } from "../categorie";
import { TypeProduit } from "../typeproduit";

export interface Produit {
  id?: string;
  codeBarre?: string;
  libelle?: string;
  prix?: number;
  categorieId?: string;
  categorieLibelle?: string;
  typeProduitId?: string;
  typeProduitLibelle?: string;
  description?: string;
  active?: boolean;
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}

