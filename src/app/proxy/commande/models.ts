
export interface LigneCommande {
    id?: string;
    quantite: number;
    produitId:string;
    commandeId?:string;
    quantiteRecue?: number;
    quantiteStock?:number;
    produitLibelle?: string;
    produitCategorieLibelle?: string;
    produitTypeProduitLibelle?:string;
    produitPrix?:number;
    commandeReference?: string;
    historiquePrixId?:string;
    createdAt?:Date;
    active?:boolean;
}
export interface LigneCommandeResultDto {
    id?: string;
    quantite: number;
    produitId:string;
    commandeId?:string;
    quantiteRecue?: number;
    produitPrix?: number;
    produitLibelle:string;
    produitCategorieLibelle:string;
   produitTypeProduitLibelle:string;
    commandeReference:string,
    commandeCaisseDemandeurId:string,
    commandeCaisseDemandeurLibelle:string,
    commandeCaisseAlloueurId:string,
    commandeUserDemandeurId:string,
    commandeUserDemandeurEmail:string,
    commandeUserAlloueurId:string,
    commandeUserAlloueurEmail:string,
    commandeCaisseAlloueurLibelle:string,
    commandeStructureDemandeurId:string,
   commandeStructureDemandeurLibelle:string,
    commandeStructureAlloueurId:string,
    commandeStructureAlloueurLibelle:string,
    commandeStatutId :string,
    commandeStatutLibelle:string,
    createdAt?:Date;
}
export interface HistoriqueCommande {
    id?: string;
    commandeId?:string;
    commandeReference?:string;
    statutId?:string;
    observation?: string;
    statutLibelle?:string;
    createdAt?:Date;
    active?:boolean;
}
export interface Commande{
    id?:string;
    observation?: string;
    caisseAlloueurId?:string;
    caisseAlloueurLibelle?:string;
    caisseDemandeurId?:string;
    caisseDemandeurLibelle?:string;
    userDemandeurId?:string;
    userDemandeurEmail?:string;
    userAlloueurNom?:string,
    userDemandeurNom?:string;
    userDemandeurMatricule?:string;
    userAlloueurId?:string;
    userAlloueurEmail?:string;
    structureDemandeurId?:string;
    structureDemandeurLibelle?:string;
    structureDemandeurCode?:string;
    structureAlloueurId?:string;
    structureAlloueurLibelle?:string;
    structureAlloueurCode?:string;
    userAlloueurMatricule?:string;
    statutId?:string;
    statutLibelle?:string;
    journalId?:string;
    createdAt?:Date;
    updatedAt?:Date;
    reference?:string;
    lignes?:LigneCommande[];
    historiques?:HistoriqueCommande[];

}
export interface CommandeGroupe{
    id?:string;
    createdAt?:Date;
    structureDemandeurId?:string;
    structureDemandeurLibelle?:string;
    structureAlloueurId?:string;
    structureAlloueurLibelle?:string;
    lignes?:LigneCommandeResultDto[];

}

export interface CommandeResultDto{
    id?:string;
    caisseAlloueurLibelle?:string;
    userAlloueurNom?:string;
    userDemandeurNom?:string;
    caisseDemandeurLibelle?:string;
    structureDemandeurId:string;
    structureDemandeurLibelle?:string;
    structureAlloueurId:string;
    structureAlloueurLibelle?:string;
    statutId:string;
    statutLibelle?:string;
    createdAt?:Date;
    updatedAt?:Date;
    reference?:string;

}
export interface CommandeSearch{
    caisseAlloueurId?:string;
    caisseDemandeurId?:string;
    userDemandeurId?:string;
    userAlloueurId?:string;
    structureAlloueurId?:string;
    structureDemandeurId?:string;
    statutId?:string;
    produitId?:string;
    startDate?:Date;
    endDate?:Date;
}
export interface CommandeApprouveRejeter{
    id?:string;
    statutId:string;
    journalId?:string;
    caisseId?:string;
    statutLibelle?:string;
    observation: string;

}


export interface ProduitCommandeRapportDto {
    produitId: number;
    categorie: string;
    produit: string;
    quantiteCommandee: number;
    montantTotal: number;
    structureDemandeurId: number;
    structureAlloueurId: number;
}

