import { roundToNearestMinutes } from 'date-fns/esm';
import React, { useState, useEffect } from 'react'
import { GetPdf } from '../helpers/GetPdf';



export const UseGetPdf = (sku) => {


     const [state, setState] = useState({

        data: [],
        load : true
        
    })

    useEffect(() => {

        GetPdf(sku)
            .then(imgs => {
                
                setState({
                    data: imgs,
                    load: false
                });

            })


    }, [sku]);

    return state;

}