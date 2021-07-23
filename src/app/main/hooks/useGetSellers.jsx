import React, { useEffect, useState } from 'react';
import GetSellers from '../helpers/GetSellers';

function useGetSellers(id_cliente) {


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

export default useGetSellers;

