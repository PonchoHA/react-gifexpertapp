import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__heartBeat">
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
