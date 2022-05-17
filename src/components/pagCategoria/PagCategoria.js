import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import NoticiaDestacada from '../inicio/NoticiaDestacada';
import NoticiaGeneral from './NoticiaGeneral';

const PagCategoria = (props) => {
    let [categoria, setCategoria] = useState(null);
    let [categoryNews, setCategoryNews] = useState(null);
    let [noticiasDestacadas, setNoticiasDestacadas] = useState(null)
    let [noticiasNODestacadas, setNoticiasNODestacadas] = useState(null)
    let params = useParams()
    
    useEffect(()=> {
        findCategory();
        //eslint-disable-next-line
    }, []);

    useEffect(()=> {
        if (categoria) {
            noticiasPorCategoria();
        }
        //eslint-disable-next-line
    }, [categoria]);

    useEffect(()=> {
        if (categoryNews) {
            buscarNoticiasDestacadas();
            buscarNoticiasNODestacadas();
        }
        //eslint-disable-next-line
    }, [categoryNews]);

    let findCategory = ()=> {
        let foundedObject = props.categorias.find(categoria => categoria._id === params.id)
        setCategoria(foundedObject)
    }

    let noticiasPorCategoria = ()=> {
        let porCategoria = props.noticias.filter(noticia => noticia.categoria === categoria.nombre);
        setCategoryNews(porCategoria);
        console.log(porCategoria)
    }

    let buscarNoticiasDestacadas = ()=> {
        let destacadas = categoryNews.filter(noticia => noticia.destacada === true)
        if (destacadas.length > 0) {setNoticiasDestacadas(destacadas)}
    }
    
    let buscarNoticiasNODestacadas = ()=> {
        let noDestacadas = categoryNews.filter(noticia => noticia.destacada === false)
        if (noDestacadas.length > 0) {setNoticiasNODestacadas(noDestacadas)}
    }

    return (
        <div>
            {
                categoria ? <h1 className='text-center'>{categoria.nombre.toUpperCase()}</h1> : null
            }
            <hr />
            {
                noticiasDestacadas ? noticiasDestacadas.map(noticia => (<NoticiaDestacada noticia={noticia}></NoticiaDestacada>)) : null
            }
            {
                noticiasNODestacadas? noticiasNODestacadas.map(noticia => (<NoticiaGeneral noticia={noticia}></NoticiaGeneral>)) : null
            }
        </div>
    );
};

export default PagCategoria;