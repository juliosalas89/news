import { useEffect, useState } from "react";

const Categoria = (props) => {
    let [noticiasDeCategoria, setNoticiasDeCategoria] = useState(null);
    let [lastDate1, setLastDate1] = useState(null);
    let [lastDate2, setLastDate2] = useState(null);

    useEffect(() => {
        filtrarPorCategoria();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (noticiasDeCategoria) {
            filterLastDate1();
        }
        // eslint-disable-next-line
    }, [noticiasDeCategoria])

    useEffect(() => {
        if (lastDate1) {
            filterLastDate2();
        }
        // eslint-disable-next-line
    }, [lastDate1])

    let filtrarPorCategoria = () => {
        let filtro = props.noticias.filter(noticia => noticia.categoria === props.categoria.nombre);
        setNoticiasDeCategoria(filtro);
        console.log(filtro)
    }

    let filterLastDate1 = () => {
        let dates = [];
        noticiasDeCategoria.map((noticia) => dates.push(new Date(noticia.fecha)));
        let auxLastDate1 = new Date(Math.max.apply(Math, dates));
        setLastDate1(auxLastDate1)
        console.log(auxLastDate1);
        console.log(typeof dates[0])
    }

    let filterLastDate2 = () => {
        let dates = [];
        noticiasDeCategoria.map((noticia) => dates.push(new Date(noticia.fecha)));
        let _dates = dates.filter((date) => date !== lastDate1);
        console.log(_dates);
        console.log(lastDate1)
        let auxLastDate2 = new Date(Math.max.apply(Math, _dates));
        setLastDate2(auxLastDate2);
        console.log(auxLastDate2);
    }

    let lastTwoNews = () => {
        let lastTwoNews = noticiasDeCategoria.filter((noticia) => noticia.fecha === lastDate1 || noticia.fecha === lastDate2);
        console.log(lastTwoNews);
    }

    return (
        <div>
            <h1>{props.categoria.nombre}</h1>
        </div>
    );
};

export default Categoria;