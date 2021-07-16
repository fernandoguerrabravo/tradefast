import { useState, useEffect } from 'react'
import { GetSku } from '../helpers/GetSku';


export const useGetSku = (idcliente) => {

    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        GetSku(idcliente)
            .then(imgs => {
                setState({
                    data: imgs,
                });
            });
    }, [idcliente]);


    return state;

}