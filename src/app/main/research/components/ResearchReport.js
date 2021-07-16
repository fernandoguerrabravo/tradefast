
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PdfReport } from './PdfReport';


export const ResearchReport = ({setpdf, sku , report}) => {

   
    const [state, setstate] = useState({

        reporte: report,
        circular: false,
        

    })

    
    

    //Funcion aque va a rescatar la informacion de la API 

    

  const getDetails = async () => {

        setstate({

            reporte: false,
            circular: true

        })

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var raw = JSON.stringify({

            'id_cliente': 'abcdef',
            'sku': sku

        });

        console.log('enviado a la api:',raw)

        var requestOptions = {

            method: 'POST',
            headers: myHeaders,
            body: raw,
            mode: 'no-cors'

        };

        const url = 'https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/reportdetails';
        const resp = await fetch(url, requestOptions);

        setstate({

            reporte: true,
            circular: false
        })

        console.log("perro:", resp)

    }; 
       
    const informe = () => {

        setpdf({

            loading: false,
        })
        console.log(sku)
        console.log(report)

    }

    return (

        <>
            
            {state.reporte ? ( state.circular ? null : <Button onClick = {informe}>Ver Informe</Button>) : null}
            {state.reporte ? null : ( state.circular ? <CircularProgress></CircularProgress> : null)}
            {state.reporte ? null : ( state.circular ?  null :  <Button onClick = {getDetails}>Generar Informe </Button> )}
            
            {/*state.circular ? <CircularProgress></CircularProgress> :  <Button>Generar Informe</Button> */} 
           

        </>


    );



}