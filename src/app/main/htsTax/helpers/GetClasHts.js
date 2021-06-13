export const GetClasHts = async (idcliente) => {


    var requestOptions = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            { "id_cliente": idcliente }
        )
    };

    // const url = "https://j6zrjwrhe0.execute-api.us-west-2.amazonaws.com/prod/htsgov";
    const resp = await fetch(`https://oyq0mrdzsf.execute-api.us-east-1.amazonaws.com/dev/getclashts`, requestOptions);
    const data = await resp.json();



    return data;

}
