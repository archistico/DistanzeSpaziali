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
    const diametro_terra = getDettagliCorpo(dimensioni_corpi_celesti, 'terra').diametro
    const divisore = diametro_terra / diametroTerraNuovo
    
    // CALCOLO DIAMETRI
    const diametro_sole = getDettagliCorpo(dimensioni_corpi_celesti, 'sole').diametro / divisore

    const html_diametro_sole = document.getElementById('diametro_sole')
    html_diametro_sole.innerHTML = diametro_sole.toFixed(2)


    // CALCOLO DISTANZE
    const distanza_terra = getDettagliCorpo(dimensioni_corpi_celesti, 'terra').distanza_dal_sole / divisore

    const html_distanza_terra = document.getElementById('distanza_terra')
    html_distanza_terra.innerHTML = distanza_terra.toFixed(2)
}

onChangeValue()