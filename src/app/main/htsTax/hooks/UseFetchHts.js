import { useState, useEffect } from 'react'
import { GetHts } from '../helpers/GetHts';

export const useFetchGifs = (htscode) => {

    const [state, setState] = useState({

        data: [],
        loading: true
    })

    useEffect(() => {

        GetHts(htscode)
            .then(imgs => {
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                });

            })


    }, [htscode]);

    return state;

}
