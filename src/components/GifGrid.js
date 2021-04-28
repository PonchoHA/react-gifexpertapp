// import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem";




const GifGrid = ({category}) => {


    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [ category ]);

    
    const {data:images, loading} = useFetchGifs(category);

    
    // getGifs();

    return (
        <>
            <h3 className="animate__heartBeat">{category}</h3>
            {loading && <p className="animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key = {img.id}
                        {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
