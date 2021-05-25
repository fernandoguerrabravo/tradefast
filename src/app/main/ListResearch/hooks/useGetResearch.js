import { useState, useEffect } from 'react'
import { GetResearch } from '../helpers/GetResearch';

export const useGetResearch = (idcliente) => {

    const [state, setState] = useState({

        data: [],
        loading: true
    })

    useEffect(() => {

        GetResearch(idcliente)
            .then(imgs => {
                //console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                });

            })


    }, [idcliente]);

    return state;

}
