import { useState, useEffect } from 'react'
import { GetClasHts } from '../helpers/GetClasHts';


export const useGetClasHts = (idcliente) => {

    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        GetClasHts(idcliente)
            .then(imgs => {
                setState({

                    data: imgs,

                });
            })

    }, [idcliente]);

    console.log("datos fetch", state)

    return state;

};