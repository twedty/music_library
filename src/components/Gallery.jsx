import React, {useState, useContext} from 'react'
import GalleryItem from './GalleryItems'
import { SongContext } from './SongContext'


function Gallery(props){
    const songData = useContext(SongContext)

    const songItems = songData.map((item, index) => {
        return(
            <GalleryItem key={index} item={item} />
        )
    })

    return (
        <div>
            {songItems}
        </div>
    )
}

export default Gallery
