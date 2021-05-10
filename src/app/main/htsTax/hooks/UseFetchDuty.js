import { useState, useEffect } from 'react'
import { GetDuty } from '../helpers/GetDuty';


export const UseFetchHts = (htscode) => {

    const [state, setState] = useState({

        data: [],
        loading: true,
        finales: []
    })

    useEffect(() => {

        GetDuty(htscode)
            .then(imgs => {
                   
                const originalJson = imgs;
                const newJson = [];
                for (const htsCode of originalJson) {
                    if (htsCode.htsno.length > 12) {
                      newJson.push(htsCode);
                    }
                  }
                
                setState({
                    data: imgs,
                    loading: false,
                    finales: newJson
                });

            })


    }, [htscode]);
   
    return state;

}