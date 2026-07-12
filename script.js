// ::: COSTANTI :::

const VELOCITA_LUCE = 299792458 // metri al secondo
const AU_IN_METRI = 149597870700
const ANNO_LUCE_IN_METRI = 9460730472580800

// Calcola la distanza dal Sole "in questo momento" di una sonda che si allontana
// a velocità pressoché costante, partendo da un dato ufficiale noto (data + AU) e
// dalla sua velocità di fuga rispetto al Sole. Resta accurata anche in futuro.
function distanzaSondaOggi(dataAncoraggio, auAncoraggio, velocitaKmS) {
    const secondiTrascorsi = (Date.now() - new Date(dataAncoraggio).getTime()) / 1000
    return auAncoraggio * AU_IN_METRI + velocitaKmS * 1000 * secondiTrascorsi
}

const CORPI_CELESTI = [
    { corpo: 'sole',             nome: 'Sole',                   diametro: 1390950000, distanza_dal_sole: 0,                 haDistanza: false },
    { corpo: 'mercurio',         nome: 'Mercurio',               diametro: 4879400,    distanza_dal_sole: 57910000000 },
    { corpo: 'venere',           nome: 'Venere',                 diametro: 12103600,   distanza_dal_sole: 108210000000 },
    { corpo: 'terra',            nome: 'Terra',                  diametro: 12745594,   distanza_dal_sole: 149597887500 },
    { corpo: 'luna',             nome: 'Luna',                   diametro: 3476000,    distanza_dal_sole: 149982287500 },
    { corpo: 'marte',            nome: 'Marte',                  diametro: 6779850,    distanza_dal_sole: 227936637500 },
    { corpo: 'giove',            nome: 'Giove',                  diametro: 138346500,  distanza_dal_sole: 778412026500 },
    { corpo: 'saturno',          nome: 'Saturno',                diametro: 114632000,  distanza_dal_sole: 1434025000000 },
    { corpo: 'urano',            nome: 'Urano',                  diametro: 50532000,   distanza_dal_sole: 2872460000000 },
    { corpo: 'nettuno',          nome: 'Nettuno',                diametro: 49105000,   distanza_dal_sole: 4498252910500 },
    { corpo: 'plutone',          nome: 'Plutone',                diametro: 2376600,    distanza_dal_sole: 5906375000000 },
    { corpo: 'eris',             nome: 'Eris',                   diametro: 2326000,    distanza_dal_sole: 10121073571000 },
    { corpo: 'eliosfera',        nome: 'Eliosfera',              diametro: 0,          distanza_dal_sole: 13463809875000,    haDiametro: false },
    // Sonde: distanza calcolata dal vivo a partire dall'ultimo dato ufficiale NASA/JPL noto
    // (fonte: Wikipedia/NASA, "as of" indicato) + velocità di fuga rispetto al Sole.
    { corpo: 'voyager2',         nome: 'Sonda Voyager 2',        diametro: 0,          distanza_dal_sole: distanzaSondaOggi('2026-02-15', 143.05, 15.4), haDiametro: false },
    { corpo: 'voyager1',         nome: 'Sonda Voyager 1',        diametro: 0,          distanza_dal_sole: distanzaSondaOggi('2026-03-15', 172.59, 17),   haDiametro: false },
    { corpo: 'proxima_centauri', nome: 'Proxima Centauri',       diametro: 201550000,  distanza_dal_sole: 40176136500000000 },
    { corpo: 'centro_galassia',  nome: 'Centro della Galassia',  diametro: 0,          distanza_dal_sole: 26000 * ANNO_LUCE_IN_METRI,    haDiametro: false },
    { corpo: 'andromeda',        nome: 'Galassia di Andromeda',  diametro: 220000 * ANNO_LUCE_IN_METRI, distanza_dal_sole: 2500000 * ANNO_LUCE_IN_METRI, escludiConfronto: true }
]

// ::: UTILITA' DI FORMATTAZIONE :::

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

function metriToUnita(metri) {
    if (metri < 0.000000001) {
        return Math.round(metri * 1000000000000 * 100) / 100 + " pm"
    }
    if (metri < 0.000001) {
        return Math.round(metri * 1000000000 * 100) / 100 + " nm"
    }
    if (metri < 0.001) {
        return Math.round(metri * 1000000 * 100) / 100 + " μm"
    }
    if (metri < 0.01) {
        return Math.round(metri * 1000 * 100) / 100 + " mm"
    }
    if (metri < 1) {
        return Math.round(metri * 100 * 100) / 100 + " cm"
    }
    if (metri < 1000) {
        return Math.round(metri * 100) / 100 + " m"
    }
    if (metri < 100000) {
        return Math.round(metri / 1000 * 100) / 100 + " km"
    }
    return numberWithSpaces(Math.round(metri / 1000)) + " km"
}

function formattaUnitaDurata(valore, singolare, plurale) {
    return valore + " " + (valore === 1 ? singolare : plurale)
}

function durataToUnita(secondi) {
    const minuto = 60
    const ora = 3600
    const giorno = 86400
    const anno = 365.25 * giorno

    if (secondi < minuto) {
        return formattaUnitaDurata(Math.round(secondi * 100) / 100, "secondo", "secondi")
    }
    if (secondi < ora) {
        return formattaUnitaDurata(Math.round(secondi / minuto * 100) / 100, "minuto", "minuti")
    }
    if (secondi < giorno) {
        return formattaUnitaDurata(Math.round(secondi / ora * 100) / 100, "ora", "ore")
    }
    if (secondi < anno) {
        return formattaUnitaDurata(Math.round(secondi / giorno * 100) / 100, "giorno", "giorni")
    }

    const anni = secondi / anno
    if (anni < 1000) {
        return formattaUnitaDurata(Math.round(anni * 100) / 100, "anno", "anni")
    }
    return formattaUnitaDurata(numberWithSpaces(Math.round(anni)), "anno", "anni")
}

// ::: LETTURA INPUT E CALCOLO PRINCIPALE :::

function onChangeValue() {
    const diametroTerraNuovo = parseFloat(document.getElementById("input_diametro_terra_nuovo").value)
    calculate(diametroTerraNuovo)
}

function calculate(diametroTerraNuovo) {
    const terra = CORPI_CELESTI.find(c => c.corpo === 'terra')
    const divisore = terra.diametro / diametroTerraNuovo

    CORPI_CELESTI.forEach(c => {
        if (c.haDiametro !== false) {
            const elDiametro = document.getElementById('diametro_' + c.corpo)
            if (elDiametro) {
                elDiametro.innerHTML = metriToUnita(c.diametro / divisore)
            }
        }

        if (c.haDistanza !== false) {
            const distanzaScalata = c.distanza_dal_sole / divisore

            const elDistanza = document.getElementById('distanza_' + c.corpo)
            if (elDistanza) {
                elDistanza.innerHTML = metriToUnita(distanzaScalata)
            }

            const elTempoLuce = document.getElementById('tempo_luce_' + c.corpo)
            if (elTempoLuce) {
                elTempoLuce.innerHTML = durataToUnita(c.distanza_dal_sole / VELOCITA_LUCE)
            }
        }
    })

    aggiornaConfrontoDiametri(divisore)
}

// ::: VISUALIZZAZIONE: CONFRONTO DIMENSIONI (cerchi in scala reale) :::

function creaConfrontoDiametri() {
    const container = document.getElementById('confronto-diametri')
    if (!container) return

    const corpi = CORPI_CELESTI.filter(c => c.haDiametro !== false && c.escludiConfronto !== true)
    const minReale = Math.min(...corpi.map(c => c.diametro))
    const maxReale = Math.max(...corpi.map(c => c.diametro))
    const minPx = 4
    const maxPx = 200

    corpi.forEach(c => {
        const px = minPx + (maxPx - minPx) * (c.diametro - minReale) / (maxReale - minReale)

        const wrapper = document.createElement('div')
        wrapper.className = 'corpo-diametro'

        const cerchio = document.createElement('div')
        cerchio.className = 'cerchio'
        cerchio.style.width = px + 'px'
        cerchio.style.height = px + 'px'

        const label = document.createElement('div')
        label.className = 'corpo-diametro-label'
        label.innerHTML = '<strong>' + c.nome + '</strong><br><span id="cerchio_label_' + c.corpo + '"></span>'

        wrapper.appendChild(cerchio)
        wrapper.appendChild(label)
        container.appendChild(wrapper)
    })
}

function aggiornaConfrontoDiametri(divisore) {
    CORPI_CELESTI.forEach(c => {
        if (c.haDiametro === false || c.escludiConfronto === true) return
        const el = document.getElementById('cerchio_label_' + c.corpo)
        if (el) el.innerHTML = metriToUnita(c.diametro / divisore)
    })
}

// ::: AVVIO :::

creaConfrontoDiametri()
onChangeValue()
