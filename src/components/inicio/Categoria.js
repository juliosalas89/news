import { useEffect, useState } from "react";
import NoticiaPorCategoria from "./NoticiaPorCategoria";

const Categoria = (props) => {
    let [categoryNews, setCategoryNews] = useState(null);
    let [firstNew, setFirstNew] = useState(null);
    let [secondNew, setSecondNew] = useState(null);

    useEffect(() => {
        filterByCategory();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (categoryNews) {
            findFirstNew();
        }
        // eslint-disable-next-line
    }, [categoryNews])

    useEffect(() => {
        if (firstNew) {
            findSecondNew();
        }
        // eslint-disable-next-line
    }, [firstNew])

    let filterByCategory = () => {
        let filter = props.noticias.filter(noticia => noticia.categoria === props.categoria.nombre);
        setCategoryNews(filter);
    }

    let findFirstNew = () => {
        let max = true;
        for (let i = 0; i < categoryNews.length; i++) {
            for (let j = 0; j < categoryNews.length; j++) {
                if (categoryNews[i].fecha < categoryNews[j].fecha) {
                    max = false;
                }
            }
            if (max) {
                setFirstNew(categoryNews[i]);
            }
            max = true;
        }
    }

    let findSecondNew = () => {
        let max2 = true;
        for (let i = 0; i < categoryNews.length; i++) {
            for (let j = 0; j < categoryNews.length; j++) {
                if (categoryNews[i]._id === firstNew._id) {
                    max2 = false;
                } else if (categoryNews[i].fecha < categoryNews[j].fecha && categoryNews[j]._id !== firstNew._id) {
                    max2 = false;
                }
            }
            if (max2) {
                setSecondNew(categoryNews[i]);
            }
            max2 = true;
        }
    }

    return (
        <div>
            <div>
                {
                    firstNew ? <NoticiaPorCategoria noticia={firstNew}></NoticiaPorCategoria> : null
                }
            </div>
            <div>
                {
                    secondNew ? <NoticiaPorCategoria noticia={secondNew}></NoticiaPorCategoria> : null
                }
            </div>
        </div>
    );
};

export default Categoria;