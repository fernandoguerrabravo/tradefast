import { useState, useEffect } from 'react'
import { GetSkuDetails } from '../helpers/GetSkuDetails';



export const useGetSkuDetails = (skunumber) => {

    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        GetSkuDetails(skunumber)
            .then(imgs => {
                setState({
                    data: imgs,
                });
            });

    }, [skunumber]);

    console.log("FetchSKuDetails", state)
    return state;

}