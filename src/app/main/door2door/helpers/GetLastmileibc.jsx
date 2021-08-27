export const GetLastmileibc = async (datosfinales) => {


    var requestOptions = {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ "boxes" : datosfinales.boxes,  "skus" : datosfinales.skus , "fba": datosfinales.zip_destino })

    };

    const resp = await fetch(`https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/lastmileibc`, requestOptions);
    const ultimamillaibc = await resp.json();

    return ultimamillaibc;


}
