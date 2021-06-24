export const GetCountry = async () => {


    var requestOptions = {

        method: 'GET',
        headers: {

            'Content-Type': 'application/json'
        }

    };

    const resp = await fetch(`https://lpliskc8d4.execute-api.us-east-1.amazonaws.com/dev/getcountry`, requestOptions);
    const datos = await resp.json();


    return datos;

}
