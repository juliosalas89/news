import React, { useEffect, useState } from 'react';
import ordenarPorFecha from '../helpers/ordenarPorFecha';
import DestacadaPorCateg from './DestacadaPorCateg';
import NoticiaGeneral from './NoticiaGeneral';

const PagCategoria = (props) => {
    let [categoryNews, setCategoryNews] = useState(null);
    let [noticiaDestacada, setNoticiaDestacada] = useState({})
    let [noticiasNODestacadas, setNoticiasNODestacadas] = useState([])

    useEffect(() => {
        if (props.categoriaNav) {
            noticiasPorCategoria();
        }
        //eslint-disable-next-line
    }, [props.categoriaNav]);

    useEffect(() => {
        if (categoryNews) {
            buscarNoticiaDestacada();
        }
        //eslint-disable-next-line
    }, [categoryNews]);

    useEffect(() => {
        if (Object.keys(noticiaDestacada).length > 0 && categoryNews) {
            buscarNoticiasNODestacadas();
        } else if (Object.keys(noticiaDestacada).length === 0 && categoryNews) {
            setearTodas()
        }
        //eslint-disable-next-line
    }, [noticiaDestacada]);

    let noticiasPorCategoria = () => {
        let porCategoria = ordenarPorFecha(props.noticias.filter(noticia => noticia.categoria === props.categoriaNav.nombre));
        setCategoryNews(porCategoria);
    }

    let buscarNoticiaDestacada = () => {
        let destacada = categoryNews.find(noticia => noticia.destacada === true);
        if (destacada) {
            setNoticiaDestacada(destacada)
        } else {
            setNoticiaDestacada({})
            console.log("desde set vacia")
        }
    }

    let buscarNoticiasNODestacadas = () => {
        let noDestacadas = ordenarPorFecha(categoryNews.filter(noticia => noticia._id !== noticiaDestacada._id));
        setNoticiasNODestacadas(noDestacadas)
        console.log("desde set No destacadas")
    }

    let setearTodas = () => {
        setNoticiasNODestacadas(categoryNews);
    }

    return (
        <div className='container'>
            <div className='mt-5'>
                {
                    props.categoriaNav ? <h1 className='text-center'>{props.categoriaNav.nombre.toUpperCase()}</h1> : null
                }
                <hr />
            </div>
            <section className='row'>
                <div className='col-sm-12 col-md-10'>
                    <div>
                        {
                            (Object.keys(noticiaDestacada).length > 0) ? <DestacadaPorCateg key={noticiaDestacada._id} noticia={noticiaDestacada}></DestacadaPorCateg> : null
                        }
                    </div>
                    <div>
                        {
                            noticiasNODestacadas ? noticiasNODestacadas.slice(0, 10).map(noticia => (<NoticiaGeneral key={noticia._id} noticia={noticia}></NoticiaGeneral>)) : null
                        }
                    </div>
                </div>
                <div className='border border-primary col-sm-12 col-md-2'>
                    <h5>aqui va una add</h5>
                </div>
            </section>
        </div>
    );
};

export default PagCategoria;