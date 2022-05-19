import React, { useEffect, useState } from 'react';
import ordenarPorFecha from '../helpers/ordenarPorFecha';
import NoticiaDestacada from '../inicio/NoticiaDestacada';
import NoticiaGeneral from './NoticiaGeneral';

const PagCategoria = (props) => {
    let [categoryNews, setCategoryNews] = useState(null);
    let [noticiasDestacadas, setNoticiasDestacadas] = useState(null)
    let [noticiasNODestacadas, setNoticiasNODestacadas] = useState(null)

    useEffect(() => {
        if (props.categoriaNav) {
            noticiasPorCategoria();
        }
        //eslint-disable-next-line
    }, [props.categoriaNav]);

    useEffect(() => {
        if (categoryNews) {
            buscarNoticiasDestacadas();
            buscarNoticiasNODestacadas();
        }
        //eslint-disable-next-line
    }, [categoryNews]);

    let noticiasPorCategoria = () => {
        let porCategoria = props.noticias.filter(noticia => noticia.categoria === props.categoriaNav.nombre);
        setCategoryNews(porCategoria);
    }

    let buscarNoticiasDestacadas = () => {
        let destacadas = ordenarPorFecha(categoryNews.filter(noticia => noticia.destacada === true));
        if (destacadas.length > 0) { setNoticiasDestacadas(destacadas) };
        console.table(destacadas);
    }

    let buscarNoticiasNODestacadas = () => {
        let noDestacadas = ordenarPorFecha(categoryNews.filter(noticia => noticia.destacada === false));
        // let noDestacadasOrdenadas = ordenarPorFecha(noDestacadas)
        if (noDestacadas.length > 0) { setNoticiasNODestacadas(noDestacadas) };
        console.table(noDestacadas);
    }

    return (
        <div>
            {
                props.categoriaNav ? <h1 className='text-center'>{props.categoriaNav.nombre.toUpperCase()}</h1> : null
            }
            <hr />
            {
                noticiasDestacadas ? noticiasDestacadas.map(noticia => (<NoticiaDestacada key={noticia._id} noticia={noticia}></NoticiaDestacada>)) : null
            }
            {
                noticiasNODestacadas ? noticiasNODestacadas.map(noticia => (<NoticiaGeneral key={noticia._id} noticia={noticia}></NoticiaGeneral>)) : null
            }
        </div>
    );
};

export default PagCategoria;