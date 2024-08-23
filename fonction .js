"use strict";

function arrondi(x) {
    return Math.round(x * 100) / 100
}

function simulateurPaie(param){

    const brut = param.brut+param.AboTel*10/100

    // calcule le cout  
    const prevoyance=arrondi(brut*1.5/100)

    // calcule le cout  
    const mutuL=arrondi(3864*2.66/100)

    // calcule le cout de la secu plafonnéee 
    const ss_plaf=arrondi(brut*6.9/100)
    
    // calcule le cout de la secu déplafonnée 
    const ss_déplaf=arrondi(brut*0.4/100)

    // calcule le cout  
    const comp_t1=arrondi(brut*4.01/100)

    // calcule le cout  
    const APEC=arrondi(brut*0.024/100)

    // calcule le cout  
    let csg=(brut*98.25/100+mutuL+prevoyance)*6.8/100
    csg = arrondi(csg)

    let crds=(brut*98.25/100+mutuL+prevoyance)*2.9/100
    // calcule le cout  
    crds = arrondi(crds)

    let salaire_net_avant_impots=brut-(ss_déplaf+ss_plaf+comp_t1+APEC+csg+crds)
    // calcule le cout  
    salaire_net_avant_impots=arrondi(salaire_net_avant_impots)

    let impots=(salaire_net_avant_impots+crds+102.78)*param.taux_impots/100
    // calcule le cout  
    impots=arrondi(impots)
    
    const IKm=param.IKm

    // calcule le cout  
    const salaire_net_apres_impots=arrondi(salaire_net_avant_impots-impots+IKm-param.AboTel*10/100)

    // calcule le cout  
    const ss_D=arrondi(brut*13/100)
    

    // calcule le cout  
    const atmp=arrondi(brut*0.66/100)

    // calcule le cout  
    const ss_plaf_P=arrondi(brut*8.55/100)

    // calcule le cout  
    const ss_deplaf_P=arrondi(brut*2.02/100)

    // calcule le cout  
    const comp_t1_P=arrondi(brut*6.01/100)

    // calcule le cout  
    const famille=arrondi(brut*5.25/100)

    // calcule le cout  
    const apec_P=arrondi(brut*0.036/100)

    // calcule le cout  
    const cont_dues=arrondi(brut*0.45/100)

    // calcule le cout  
    const cout_patron=arrondi(ss_D+ss_deplaf_P+ss_plaf_P+atmp+prevoyance+mutuL+comp_t1_P+famille+apec_P+cont_dues)

    // calcule le cout  
    const cout_total=arrondi(brut+cout_patron+param.IKm)

    // calcule le cout  
    const urssaf=arrondi(ss_D+ss_déplaf+ss_deplaf_P+ss_plaf+ss_plaf_P+famille+csg+crds+cont_dues)

    // calcule le cout  
    const retr=arrondi(APEC+apec_P+comp_t1+comp_t1_P)

    // calcule le cout  
    const prev=arrondi(prevoyance)

    // calcule le cout  
    const mutuel=arrondi(mutuL)

    // calcule le cout  
    const impot=arrondi((salaire_net_avant_impots+crds+102.78)*param.taux_impots/100)

    // Renvoyer un objet contenant les résultats de calcul
    return {
        ss_plaf,
        ss_déplaf,
        comp_t1,
        APEC,
        csg,
        crds,
        salaire_net_avant_impots,
        impots,
        salaire_net_apres_impots,
        ss_D,
        prevoyance,
        mutuL,
        atmp,
        ss_deplaf_P,
        ss_plaf_P,
        comp_t1_P,
        famille,
        apec_P,
        cont_dues,
        cout_patron,
        cout_total,
        urssaf,
        retr,
        prev,
        mutuel,
        impot
    }

}

// Déclarer la fonction dans les exports de ce module
exports.simulateurPaie = simulateurPaie;
