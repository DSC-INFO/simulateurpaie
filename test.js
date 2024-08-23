"use strict"
const assert = require("node:assert").strict
const { simulateurPaie } = require('./fonction ')

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

function compareMontant(actual, expected) {
    return (expected - actual) < 0.01
}

function test_mille_euros() {
    const resultat = simulateurPaie({
        brut: 1000.00,
        AboTel: 0.00
    })

    assertMontant(resultat.prev, 15.00, "Total: complémentaire prévoyance")
    assertMontant(resultat.retr, 100.80, "Total: cotisation retraite complémentaire")
}

console.log("Cas de test: 1000€ brut")
test_mille_euros()
console.log("OK")