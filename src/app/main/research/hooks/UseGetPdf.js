import { useState, useEffect } from 'react'
import { GetPdf } from '../helpers/GetPdf';


export const UseGetPdf = (idcliente) => {


     const [state, setState] = useState({

        data: [],
        
    })

    useEffect(() => {

        GetPdf()
            .then(imgs => {
                console.log(imgs);
                setState({
                    data: imgs,
                   
                });

            })


    }, []);

    return state;

}