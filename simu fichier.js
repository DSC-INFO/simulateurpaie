"use strict";

const fs = require("node:fs")

// Importer la fonction simulateurPaie()
const { simulateurPaie } = require("./fonction ")

const args = process.argv
// Affecte le 3ème argument ( index 2 ) dans la variable brut
const fichier_source = args.at(2)
const fichier_destination = args.at(3)

const contenu_fichier = fs.readFileSync(fichier_source, { encoding: "ascii" })

const lignes_fichier = contenu_fichier.split("\r\n")
let donnees_a_ecrire = ""

for (const ligne of lignes_fichier) {
    console.log(ligne)

    // On découpe la ligne à chaque virgule
    const param_simulateur = ligne.split(",")
    console.log(param_simulateur)

    // Appeler la fonction simulateurPaie() et récupérer le résultat
    const res = simulateurPaie({
        brut: Number.parseFloat(param_simulateur[0]),
        taux_impots: Number.parseFloat(param_simulateur[1]),
        IKm: Number.parseFloat(param_simulateur[2]),
        AboTel: Number.parseFloat(param_simulateur[3])
    })

    console.log(res)

    const ligne_a_ecrire = ""+res.salaire_net_apres_impots+","+res.impot+","+res.mutuel+","+res.prev+","+res.retr+","+res.cout_total

    donnees_a_ecrire = donnees_a_ecrire + ligne_a_ecrire + "\r\n"
    
}

// Ecrire toutes les lignes de données dans le fichier
fs.writeFileSync(fichier_destination, donnees_a_ecrire)