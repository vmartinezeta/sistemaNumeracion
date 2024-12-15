// Autor: Víctor Martínez
const convertirDecimal = (numeroString, sistemaNumeracion=2) => {
    const numeroArray = parsearDecimal(numeroString.split(""))
    let numero = numeroArray.at(0)
    while (numeroArray.length > 1) {
        numero = numero * sistemaNumeracion + numeroArray.at(1)
        numeroArray.shift()
    }
    return numero
}

const crearAbecedario = () => {
    const mapa = {}
    let n = 10
    for(let i=97;i<=122;i++) {
        const letra = String.fromCharCode(i)
        if (n === 24 ) {
            mapa["ñ"] = n
            n++
        }
        mapa[letra] = n
        n ++
    }
    return mapa
}

const toNumero = array => {
    const letras = crearAbecedario()
    return array.map(numero => {
        for (let entry of Object.entries(letras)) {
            if (entry.at(0) === numero) {
                return entry.at(1)
            }
        }
        return numero
    })
}

const toInt = array => {
    return array.map(n => +n)
}

const pipe = (...fns) => array => fns.reduce((resultado, fn) => fn(resultado), array)

const convertir = (numero, sistemaNumeracion = 2) => {
    let cociente = numero
    const reciduos = []
    while (cociente >= sistemaNumeracion) {
        const reciduo = cociente % sistemaNumeracion
        reciduos.push(reciduo)
        cociente = parseInt(cociente / sistemaNumeracion)
    }
    reciduos.push(cociente)
    return transformar(reciduos.reverse()).join(" ")
}

const toLetra = array => {
    const letras = crearAbecedario()
    return array.map(numero => {
        for (let entry of Object.entries(letras)) {
            if (entry.at(1) === numero) {
                return entry.at(0)
            }
        }
        return numero
    })
}

const parsearDecimal = pipe(
    toNumero,
    toInt
)

const transformar = pipe(
    toLetra
)


let numero = "abcd"
let sistemaNumeracion = 30
const numeroDecimal = convertirDecimal(numero, sistemaNumeracion)
console.log(numero, "=", numeroDecimal)



numero = 871
sistemaNumeracion = 3
const conversion = convertir(numero, sistemaNumeracion)
console.log(numero, "=", `b${sistemaNumeracion}`, conversion)