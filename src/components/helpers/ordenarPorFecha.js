const ordenarPorFecha = (array) => {
    let elementosOrdenados = []
    let arrFechasConId = [];

    array.map(elemento => arrFechasConId.push(elemento.fecha + "*" + elemento._id))
    
    let arrFechasConIdOrdenado = arrFechasConId.sort()

    for(let i = 0; i < arrFechasConIdOrdenado.length; i++) {
        let idOrdenado = arrFechasConIdOrdenado[i].split("*")[1];
   
        let elementoIdentificado = array.find(elemento => elemento._id === idOrdenado);
        elementosOrdenados.push(elementoIdentificado);
    }
   
    let resultado = elementosOrdenados.reverse()

    return resultado
};

export default ordenarPorFecha;