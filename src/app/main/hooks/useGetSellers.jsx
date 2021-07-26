import { useState, useEffect } from 'react'
import { GetSellers } from '../helpers/GetSellers';


export const UseGetSellers = (id_cliente) => {

    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        GetSellers(id_cliente)
            .then(imgs => {
                setState({

                    data: imgs,

                });
            });
    }, [id_cliente]);


    return state;

}
