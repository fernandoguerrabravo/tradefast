import { useState, useEffect } from 'react'
import { GetOtherTax } from '../helpers/GetOtherTax';



export const UseGetOtherTax = () => {

    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        GetOtherTax()
            .then(imgs => {
               
                 setState({

                    data: imgs,

                });
            });
    }, []);


    return state;

}
