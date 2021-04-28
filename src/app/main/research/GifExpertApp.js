import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([]);
    return (
        <>
            <AddCategory setCategories={setCategories} />
            <br></br>
            
                {
                       categories.map(category => (
                        <GiftGrid
                        key = {category}
                        category = {category} 
                        />

                    ))
                }
        </>
    )
}

export default GifExpertApp;