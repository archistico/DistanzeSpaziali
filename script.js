function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function onChangeValue() {
    let diametroTerraNuovo = parseFloat(document.getElementById("input_diametro_terra_nuovo").value)
    calculate(diametroTerraNuovo)
}

function getDettagliCorpo(arr, corpo) {
    let diametro = 0
    let distanza_dal_sole = 0
    arr.forEach(c => {
        if(c.corpo == corpo) {
            diametro = c.diametro
            distanza_dal_sole = c.distanza_dal_sole
        }
    });
    return { diametro: diametro, distanza_dal_sole: distanza_dal_sole }
}

function metriToUnita(metri) {
    if(metri < 0.01) {
        return Math.round(metri*1000*100)/100 + " mm"
    }
    if(metri < 1) {
        return Math.round(metri*100*100)/100 + " cm"
    }
    if(metri < 1000) {
        return Math.round(metri*100)/100 + " m"
    }
    if(metri > 100000) {
        return numberWithSpaces(Math.round(metri/1000)) + " km"
    }
    if(metri > 1000) {
        return Math.round(metri/1000*100)/100 + " km"
    }
    
}

function calculate(diametroTerraNuovo) {
    const dimensioni_corpi_celesti = [
        { corpo: 'sole',             diametro: 1390950000,   distanza_dal_sole: 0 },
        { corpo: 'mercurio',         diametro: 4879400,      distanza_dal_sole: 57910000000 },
        { corpo: 'venere',           diametro: 12103600,     distanza_dal_sole: 108210000000 },
        { corpo: 'terra',            diametro: 12745594,     distanza_dal_sole: 149597887500 },
        { corpo: 'luna',             diametro: 3476000,      distanza_dal_sole: 149982287500 },
        { corpo: 'marte',            diametro: 6779850,      distanza_dal_sole: 227936637500 },
        { corpo: 'giove',            diametro: 138346500,    distanza_dal_sole: 778412026500 },
        { corpo: 'saturno',          diametro: 114632000,    distanza_dal_sole: 1434025000000 },
        { corpo: 'urano',            diametro: 50532000,     distanza_dal_sole: 2872460000000 },
        { corpo: 'nettuno',          diametro: 49105000,     distanza_dal_sole: 4498252910500 },
        { corpo: 'plutone',          diametro: 4376600,      distanza_dal_sole: 5906375000000 },
        { corpo: 'eris',             diametro: 2326000,      distanza_dal_sole: 10121073571000 },
        { corpo: 'eliosfera',        diametro: 0,            distanza_dal_sole: 13463809875000 },
        { corpo: 'proxima_centauri', diametro: 201550000,    distanza_dal_sole: BigInt('40176136500000000') }
    ]

    // CALCOLO DIVISORE
    const diametro_terra_originale = getDettagliCorpo(dimensioni_corpi_celesti, 'terra').diametro
    const divisore = diametro_terra_originale / diametroTerraNuovo
    
    // CALCOLO DIAMETRI
    const diametro_sole = getDettagliCorpo(dimensioni_corpi_celesti,'sole').diametro / divisore
    const diametro_mercurio = getDettagliCorpo(dimensioni_corpi_celesti,'mercurio').diametro / divisore
    const diametro_venere = getDettagliCorpo(dimensioni_corpi_celesti,'venere').diametro / divisore
    const diametro_terra = getDettagliCorpo(dimensioni_corpi_celesti,'terra').diametro / divisore
    const diametro_luna = getDettagliCorpo(dimensioni_corpi_celesti,'luna').diametro / divisore
    const diametro_marte = getDettagliCorpo(dimensioni_corpi_celesti,'marte').diametro / divisore
    const diametro_giove = getDettagliCorpo(dimensioni_corpi_celesti,'giove').diametro / divisore
    const diametro_saturno = getDettagliCorpo(dimensioni_corpi_celesti,'saturno').diametro / divisore
    const diametro_urano = getDettagliCorpo(dimensioni_corpi_celesti,'urano').diametro / divisore
    const diametro_nettuno = getDettagliCorpo(dimensioni_corpi_celesti,'nettuno').diametro / divisore
    const diametro_plutone = getDettagliCorpo(dimensioni_corpi_celesti,'plutone').diametro / divisore
    const diametro_eris = getDettagliCorpo(dimensioni_corpi_celesti,'eris').diametro / divisore
    const diametro_proxima_centauri = getDettagliCorpo(dimensioni_corpi_celesti,'proxima_centauri').diametro / divisore

    const html_diametro_sole = (document.getElementById('diametro_sole')).innerHTML = metriToUnita(diametro_sole)
    const html_diametro_mercurio = (document.getElementById('diametro_mercurio')).innerHTML = metriToUnita(diametro_mercurio)
    const html_diametro_venere = (document.getElementById('diametro_venere')).innerHTML = metriToUnita(diametro_venere)
    const html_diametro_terra = (document.getElementById('diametro_terra')).innerHTML = metriToUnita(diametro_terra)
    const html_diametro_luna = (document.getElementById('diametro_luna')).innerHTML = metriToUnita(diametro_luna)
    const html_diametro_marte = (document.getElementById('diametro_marte')).innerHTML = metriToUnita(diametro_marte)
    const html_diametro_giove = (document.getElementById('diametro_giove')).innerHTML = metriToUnita(diametro_giove)
    const html_diametro_saturno = (document.getElementById('diametro_saturno')).innerHTML = metriToUnita(diametro_saturno)
    const html_diametro_urano = (document.getElementById('diametro_urano')).innerHTML = metriToUnita(diametro_urano)
    const html_diametro_nettuno = (document.getElementById('diametro_nettuno')).innerHTML = metriToUnita(diametro_nettuno)
    const html_diametro_plutone = (document.getElementById('diametro_plutone')).innerHTML = metriToUnita(diametro_plutone)
    const html_diametro_eris = (document.getElementById('diametro_eris')).innerHTML = metriToUnita(diametro_eris)
    const html_diametro_proxima_centauri = (document.getElementById('diametro_proxima_centauri')).innerHTML = metriToUnita(diametro_proxima_centauri)


    // CALCOLO DISTANZE
    const distanza_dal_sole_mercurio = getDettagliCorpo(dimensioni_corpi_celesti,'mercurio').distanza_dal_sole / divisore
    const distanza_dal_sole_venere = getDettagliCorpo(dimensioni_corpi_celesti,'venere').distanza_dal_sole / divisore
    const distanza_dal_sole_terra = getDettagliCorpo(dimensioni_corpi_celesti,'terra').distanza_dal_sole / divisore
    const distanza_dal_sole_luna = getDettagliCorpo(dimensioni_corpi_celesti,'luna').distanza_dal_sole / divisore
    const distanza_dal_sole_marte = getDettagliCorpo(dimensioni_corpi_celesti,'marte').distanza_dal_sole / divisore
    const distanza_dal_sole_giove = getDettagliCorpo(dimensioni_corpi_celesti,'giove').distanza_dal_sole / divisore
    const distanza_dal_sole_saturno = getDettagliCorpo(dimensioni_corpi_celesti,'saturno').distanza_dal_sole / divisore
    const distanza_dal_sole_urano = getDettagliCorpo(dimensioni_corpi_celesti,'urano').distanza_dal_sole / divisore
    const distanza_dal_sole_nettuno = getDettagliCorpo(dimensioni_corpi_celesti,'nettuno').distanza_dal_sole / divisore
    const distanza_dal_sole_plutone = getDettagliCorpo(dimensioni_corpi_celesti,'plutone').distanza_dal_sole / divisore
    const distanza_dal_sole_eris = getDettagliCorpo(dimensioni_corpi_celesti,'eris').distanza_dal_sole / divisore
    const distanza_dal_sole_eliosfera = getDettagliCorpo(dimensioni_corpi_celesti,'eliosfera').distanza_dal_sole / divisore
    const distanza_dal_sole_proxima_centauri = Number(BigInt(getDettagliCorpo(dimensioni_corpi_celesti,'proxima_centauri').distanza_dal_sole) / BigInt(divisore))

    const html_distanza_dal_sole_mercurio = (document.getElementById('distanza_mercurio')).innerHTML = metriToUnita(distanza_dal_sole_mercurio)
    const html_distanza_dal_sole_venere = (document.getElementById('distanza_venere')).innerHTML = metriToUnita(distanza_dal_sole_venere)
    const html_distanza_dal_sole_terra = (document.getElementById('distanza_terra')).innerHTML = metriToUnita(distanza_dal_sole_terra)
    const html_distanza_dal_sole_luna = (document.getElementById('distanza_luna')).innerHTML = metriToUnita(distanza_dal_sole_luna)
    const html_distanza_dal_sole_marte = (document.getElementById('distanza_marte')).innerHTML = metriToUnita(distanza_dal_sole_marte)
    const html_distanza_dal_sole_giove = (document.getElementById('distanza_giove')).innerHTML = metriToUnita(distanza_dal_sole_giove)
    const html_distanza_dal_sole_saturno = (document.getElementById('distanza_saturno')).innerHTML = metriToUnita(distanza_dal_sole_saturno)
    const html_distanza_dal_sole_urano = (document.getElementById('distanza_urano')).innerHTML = metriToUnita(distanza_dal_sole_urano)
    const html_distanza_dal_sole_nettuno = (document.getElementById('distanza_nettuno')).innerHTML = metriToUnita(distanza_dal_sole_nettuno)
    const html_distanza_dal_sole_plutone = (document.getElementById('distanza_plutone')).innerHTML = metriToUnita(distanza_dal_sole_plutone)
    const html_distanza_dal_sole_eris = (document.getElementById('distanza_eris')).innerHTML = metriToUnita(distanza_dal_sole_eris)
    const html_distanza_dal_sole_eliosfera = (document.getElementById('distanza_eliosfera')).innerHTML = metriToUnita(distanza_dal_sole_eliosfera)
    const html_distanza_dal_sole_proxima_centauri = (document.getElementById('distanza_proxima_centauri')).innerHTML = metriToUnita(distanza_dal_sole_proxima_centauri)
}

onChangeValue()



// sole
// mercurio
// venere
// terra
// luna
// marte
// giove
// saturno
// urano
// nettuno
// plutone
// eris
// eliosfera
// proxima_centauri
