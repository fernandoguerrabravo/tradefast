
import React, { useState, useEffect } from 'react'
import { GetSellers } from 'app/main/helpers/GetSellers';


function UseGetAddress(id_cliente) {


    const [state, setState] = useState({

        data: [],

    })

    useEffect(() => {

        GetSellers(id_cliente)
            .then(imgs => {

                const originalJson = imgs.facilities;
                const newJson = [];
                for (const add of originalJson) {
                    if (add.type == "exw") {
                        newJson.push(add);
                    }
                }

                setState({

                    data: newJson[0],

                });
            });
    }, [id_cliente]);


    return state;
}

export default UseGetAddress
