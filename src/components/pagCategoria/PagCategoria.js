import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import ordenarPorFecha from '../helpers/ordenarPorFecha';
import NoticiaDestacada from '../inicio/NoticiaDestacada';
import NoticiaGeneral from './NoticiaGeneral';

const PagCategoria = (props) => {
    let [categoria, setCategoria] = useState(null);
    let [categoryNews, setCategoryNews] = useState(null);
    let [noticiasDestacadas, setNoticiasDestacadas] = useState(null)
    let [noticiasNODestacadas, setNoticiasNODestacadas] = useState(null)
    let params = useParams()

    useEffect(() => {
        findCategory();
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (categoria) {
            noticiasPorCategoria();
        }
        //eslint-disable-next-line
    }, [categoria]);

    useEffect(() => {
        if (categoryNews) {
            buscarNoticiasDestacadas();
            buscarNoticiasNODestacadas();
        }
        //eslint-disable-next-line
    }, [categoryNews]);

    let findCategory = () => {
        let foundedObject = props.categorias.find(categoria => categoria._id === params.id)
        setCategoria(foundedObject)
    }

    let noticiasPorCategoria = () => {
        let porCategoria = props.noticias.filter(noticia => noticia.categoria === categoria.nombre);
        setCategoryNews(porCategoria);
    }

    let buscarNoticiasDestacadas = () => {
        let destacadas = ordenarPorFecha(categoryNews.filter(noticia => noticia.destacada === true));
        // let destacadasOrdenadas = ordenarPorFecha(destacadas)
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
                categoria ? <h1 className='text-center'>{categoria.nombre.toUpperCase()}</h1> : null
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