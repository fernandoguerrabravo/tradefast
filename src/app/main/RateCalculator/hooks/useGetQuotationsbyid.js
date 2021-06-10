import { useState, useEffect } from 'react'
import { GetQuotationsbyid } from '../helpers/GetQuotationsbyid';

export const useGetQuotationsbyid = (id) => {

    const [state, setState] = useState({
  
    })

    useEffect(() => {

        GetQuotationsbyid(id)
            .then(imgs => {
                setState({
    
                    ...imgs,
                    
                });
            })
    }, [id]);

    console.log("FETH DETALLES", state)

    return {state};
};