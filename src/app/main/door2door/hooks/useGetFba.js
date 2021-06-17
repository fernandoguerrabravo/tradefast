import { useState, useEffect } from 'react'
import { GetFba } from '../helpers/GetFba';

export const UseGetFba = () => {

    const [state, setState] = useState({

        data: [],
        loading: true,

    })

    useEffect(() => {

        GetFba()
            .then(imgs => {

                setState({

                    data: imgs,

                });

            });

    }, []);


    return state;

}