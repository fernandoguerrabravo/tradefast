import { useState, useEffect } from 'react'
import { GetClas } from '../helpers/GetClas';

export const UseFetchClas = (htscode) => {

    const [state, setState] = useState({

        data: [],
        loading: true,
        finales: []
    })

    useEffect(() => {

        GetClas(htscode)
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

/*const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/*const originalJson = [...]; // El JSON del ejemplo
const newJson = [];
for (const htsCode of originalJson) {
  if (htsCode.HTS.length === 8) {
    newJson.push(htsCode);
  }
}
console.log(newJson);*/