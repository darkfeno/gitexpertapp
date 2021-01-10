import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrill } from './components/GifGrill'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Son goku'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(item => (
                        <GifGrill
                            key={item}
                            category={item} />
                    ))
                }
            </ol>
        </>
    )
}
