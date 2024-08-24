"use strict"
const assert = require("node:assert").strict
const { simulateurPaie } = require('./fonction ')

// Fonctions utilitaires
function assertMontant(actual, expected, text) {
    if (expected - actual >= 0.01) {
        throw new assert.AssertionError({
            message: text,
            actual,
            expected,
            operator: 'assertMontant',
            stackStartFn: assertMontant
        })
    }
}

// Définition des cas de tests

function test_mille_euros() {
    // Appel de la fonction à tester
    const resultat = simulateurPaie({
        brut: 1000.00,
        taux_impots: 0.00,
        IKm: 51.52,
        AboTel: 0.00
    })

    // Controle des totaux
    assertMontant(resultat.urssaf, 479.03, "Total: URSSAF")
    assertMontant(resultat.prev, 15.00, "Total: complémentaire prévoyance")
    assertMontant(resultat.retr, 100.80, "Total: cotisation retraite complémentaire")
    assertMontant(resultat.mutuel, 102.78, "Total: cotisation mutuelle complémentaire")
    assertMontant(resultat.impot, 0.00, "Total: impots PAS")
}

function test_millecinqcent_euros() {
    // Appel de la fonction à tester
    const resultat = simulateurPaie({
        brut: 1500.00,
        taux_impots: 0.00,
        IKm: 622.64,
        AboTel: 0.00
    })

    // Controle des totaux
    assertMontant(resultat.urssaf, 713.55, "Total: URSSAF")
    assertMontant(resultat.prev, 22.50, "Total: complémentaire prévoyance")
    assertMontant(resultat.retr, 151.20, "Total: cotisation retraite complémentaire")
    assertMontant(resultat.mutuel, 102.78, "Total: cotisation mutuelle complémentaire")
    assertMontant(resultat.impot, 0.00, "Total: impots PAS")
}

// Appel des cas de test
console.log("Cas de test: 1000€ brut")
test_mille_euros()
console.log("OK")

console.log("Cas de test: 1500€ brut")
test_millecinqcent_euros()
console.log("OK")