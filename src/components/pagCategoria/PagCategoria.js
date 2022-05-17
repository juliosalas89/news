import React from 'react';
import { useParams } from "react-router-dom"

const PagCategoria = (props) => {
    let params = useParams()
    
    console.log(params.id)
    
    return (
        <div>
            
        </div>
    );
};

export default PagCategoria;