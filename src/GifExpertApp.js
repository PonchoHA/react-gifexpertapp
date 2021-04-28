
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {AddCategory} from '../src/components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {



    const [categories, setCategorie] = useState(['Naruto']);

    // const hanldeAdd = () => {
    //     setCategorie([...categories,'Senya']);

    //     // Forma 2 por funcion
    //     // setCategorie(c => [...c, 'Senya']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorie={ setCategorie } />
            <hr />
            
            <ol>
                { 
                    categories.map(c => (
                        <GifGrid key = {c} category = {c} />
                        ))
                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
