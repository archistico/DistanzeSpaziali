function getNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
        { corpo: 'proxima centauri', diametro: 201550000,    distanza_dal_sole: 40176136500000000 }
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
    const diametro_eliosfera = getDettagliCorpo(dimensioni_corpi_celesti,'eliosfera').diametro / divisore

    const html_diametro_sole = (document.getElementById('diametro_sole')).innerHTML = diametro_sole.toFixed(3)
    const html_diametro_mercurio = (document.getElementById('diametro_mercurio')).innerHTML = diametro_mercurio.toFixed(3)
    const html_diametro_venere = (document.getElementById('diametro_venere')).innerHTML = diametro_venere.toFixed(3)
    const html_diametro_terra = (document.getElementById('diametro_terra')).innerHTML = diametro_terra.toFixed(3)
    const html_diametro_luna = (document.getElementById('diametro_luna')).innerHTML = diametro_luna.toFixed(3)
    const html_diametro_marte = (document.getElementById('diametro_marte')).innerHTML = diametro_marte.toFixed(3)
    const html_diametro_giove = (document.getElementById('diametro_giove')).innerHTML = diametro_giove.toFixed(3)
    const html_diametro_saturno = (document.getElementById('diametro_saturno')).innerHTML = diametro_saturno.toFixed(3)
    const html_diametro_urano = (document.getElementById('diametro_urano')).innerHTML = diametro_urano.toFixed(3)
    const html_diametro_nettuno = (document.getElementById('diametro_nettuno')).innerHTML = diametro_nettuno.toFixed(3)
    const html_diametro_plutone = (document.getElementById('diametro_plutone')).innerHTML = diametro_plutone.toFixed(3)
    const html_diametro_eris = (document.getElementById('diametro_eris')).innerHTML = diametro_eris.toFixed(3)
    const html_diametro_eliosfera = (document.getElementById('diametro_eliosfera')).innerHTML = diametro_eliosfera.toFixed(3)


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
    const distanza_dal_sole_proxima_centauri = getDettagliCorpo(dimensioni_corpi_celesti,'proxima_centauri').distanza_dal_sole / divisore

    const html_distanza_dal_sole_mercurio = (document.getElementById('distanza_mercurio')).innerHTML = distanza_dal_sole_mercurio.toFixed(3)
    const html_distanza_dal_sole_venere = (document.getElementById('distanza_venere')).innerHTML = distanza_dal_sole_venere.toFixed(3)
    const html_distanza_dal_sole_terra = (document.getElementById('distanza_terra')).innerHTML = distanza_dal_sole_terra.toFixed(3)
    const html_distanza_dal_sole_luna = (document.getElementById('distanza_luna')).innerHTML = distanza_dal_sole_luna.toFixed(3)
    const html_distanza_dal_sole_marte = (document.getElementById('distanza_marte')).innerHTML = distanza_dal_sole_marte.toFixed(3)
    const html_distanza_dal_sole_giove = (document.getElementById('distanza_giove')).innerHTML = distanza_dal_sole_giove.toFixed(3)
    const html_distanza_dal_sole_saturno = (document.getElementById('distanza_saturno')).innerHTML = distanza_dal_sole_saturno.toFixed(3)
    const html_distanza_dal_sole_urano = (document.getElementById('distanza_urano')).innerHTML = distanza_dal_sole_urano.toFixed(3)
    const html_distanza_dal_sole_nettuno = (document.getElementById('distanza_nettuno')).innerHTML = distanza_dal_sole_nettuno.toFixed(3)
    const html_distanza_dal_sole_plutone = (document.getElementById('distanza_plutone')).innerHTML = distanza_dal_sole_plutone.toFixed(3)
    const html_distanza_dal_sole_eris = (document.getElementById('distanza_eris')).innerHTML = distanza_dal_sole_eris.toFixed(3)
    const html_distanza_dal_sole_eliosfera = (document.getElementById('distanza_eliosfera')).innerHTML = distanza_dal_sole_eliosfera.toFixed(3)
    const html_distanza_dal_sole_proxima_centauri = (document.getElementById('distanza_proxima_centauri')).innerHTML = distanza_dal_sole_proxima_centauri.toFixed(3)
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
