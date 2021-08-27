import React, { useState, useEffect } from 'react'
import { Getcustomusa } from '../helpers/GetCustomusa';


function UseGetCustomsusa(datosfinales) {

    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        Getcustomusa(datosfinales)
            .then(imgs => {
                setState({
                    data: imgs,
                });
            });
    }, [datosfinales]);

    return state;
}

export default UseGetCustomsusa;
