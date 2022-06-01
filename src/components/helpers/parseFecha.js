const parseFecha = (fecha)=> {
    const fechaParsed = fecha.slice(0,10);
    const fechaArray = fechaParsed.split("-");
    return `${fechaArray[2]}/${fechaArray[1]}/${fechaArray[0]}`
}

export default parseFecha