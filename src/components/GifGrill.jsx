
import React from 'react'
import { GifGrillItem } from '../GifGrillItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrill = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);
    return (
        <>
            <h3 className="animate__animated animate_fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">loading</p>}
            <div className="card-grid">
                {
                    images.map((img) => {
                        return (
                            <GifGrillItem
                                key={img.id}
                                {...img} />
                        )
                    })
                }

            </div>
        </>

    )
}
