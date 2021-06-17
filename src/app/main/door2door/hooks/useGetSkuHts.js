import { useState, useEffect } from 'react'
import { GetSkuHts } from '../helpers/GetSkuHts';


export const useGetSkuHts = (event) => {


    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        GetSkuHts(event)
            .then(imgs => {
                setState({
                    data: imgs,
                });
            })

    }, [event]);



    return state;

};