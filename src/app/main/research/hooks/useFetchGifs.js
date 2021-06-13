import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category, sku) => {

    const [state, setState] = useState({

        data: [],
        loading: true
    })

    useEffect(() => {

        getGifs(category, sku)
            .then(imgs => {
                //console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                });

            })


    }, [category]);

    return state;

}
