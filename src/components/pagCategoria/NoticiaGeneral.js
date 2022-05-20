import React from 'react';
import Card from 'react-bootstrap/Card'

const NoticiaGeneral = (props) => {

    let mayusculas = (input)=> {
        return input.toUpperCase()
    }

    return (
        <div className='mb-2 p-0 container-fluid'>
            <hr />
            <div className='mt-2 row'>
                <section className='col-sm-12 col-md-5'>
                    <img className='imgNoticiaGeneral' alt="" />
                </section>
                <article className='col-sm-12 col-md-7'>
                    <Card.Title>{mayusculas(props.noticia.titulo)}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </article>
            </div>
        </div>
    );
};

export default NoticiaGeneral;