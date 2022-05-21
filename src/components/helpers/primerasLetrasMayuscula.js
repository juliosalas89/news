const primerasLetrasMayuscula = (input) => {
    let resultadoArray = [];
    let palabras = input.split(" ");
    for (let palabra of palabras) {
        palabra = palabra.slice(0,1).toUpperCase() + palabra.slice(1).toLowerCase()
        resultadoArray.push(palabra)
    }
    let resultado = resultadoArray.join(" ")
    return resultado
};

export default primerasLetrasMayuscula;