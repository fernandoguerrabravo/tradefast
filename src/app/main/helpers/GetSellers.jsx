import React from 'react';


async function GetSellers(id_cliente) {


    var raw = JSON.stringify({

        "id_cliente": id_cliente
    });


    var requestOptions = {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json',

        },
        body: raw,


    };


    const resp = await fetch('https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getseller', requestOptions);
    const datos = await resp.json();

    console.log(datos);
    return datos;

}

export default GetSellers;
