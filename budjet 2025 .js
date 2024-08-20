"use strict";

// Importer la fonction simulateurPaie()
const { simulateurPaie } = require("./fonction ")

/*
 process.argv contient les arguments en ligne de commande, qui a été tapé dans la console ( terminal )
*/
const args = process.argv
// Affecte le 3ème argument ( index 2 ) dans la variable brut
const brut = Number.parseFloat(args.at(2))
// Affecte le 4ème argument ( index 3 ) dans la variable taux_impots
const taux_impots = Number.parseFloat(args.at(3))
// Affecter le 5ème argument ( index 4 ) dans la variable IKm
const IKm = Number.parseFloat(args.at(4))

// Construire un objet contenant les paramètres d'appel de simulateurPaie()
const paramSimulateurPaie =  {
    brut,
    taux_impots,
    IKm
}
// Appeler la fonction simulateurPaie() et récupérer le résultat
const res = simulateurPaie(paramSimulateurPaie)

// Faire l'affichage dans la console des résultats de calcul
console.log("salaire brut: ",brut)
console.log("-------------------------------------------------------")
console.log(" SS plafonnée: ",res.ss_plaf)
console.log(" SS déplafonnée: ",res.ss_déplaf)
console.log(" comp tranche1: ",res.comp_t1)
console.log(" APEC: ",res.APEC)
console.log(" CSG: ",res.csg)
console.log(" CRDS: ",res.crds)
console.log("-------------------------------------------------------")
console.log("salaire net: ",res.salaire_net_avant_impots)
console.log("impots: ",res.impots)
console.log("salaire net apres impots: ",res.salaire_net_apres_impots)
console.log("-------------------------------------------------------")
console.log("Cout Total: ",res.cout_total)
console.log("-------------------------------------------------------")
console.log("charges patronales:")
console.log("SS danger: ",res.ss_D)
console.log("prevoyance : ",res.prevoyance)
console.log("mutuelle: ",res.mutuL)
console.log("ATMP: ",res.atmp)
console.log(" SS plafonnée patron: ",res.ss_plaf_P)
console.log(" SS déplafonnée patron: ",res.ss_deplaf_P)
console.log(" comp tranche1 patron: ",res.comp_t1_P)
console.log(" Famille: ",res.famille)
console.log(" APEC patron: ",res.apec_P)
console.log(" autres cont dues par patron: ",res.cont_dues)
console.log("-------------------------------------------------------")
console.log(" cout des charges: ",res.cout_patron)
console.log("-------------------------------------------------------")
console.log("URSSAF: ",res.urssaf)
console.log("retraite: ",res.retr)
console.log("AXA prevoyance: ",res.prev)
console.log("AXA mutuelle: ",res.mutuel)
console.log("impots: ",res.impot)
