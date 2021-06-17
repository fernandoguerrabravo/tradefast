export const GetFba = async () => {


    var requestOptions = {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    };

    const resp = await fetch(`https://vc2i6wy990.execute-api.us-east-1.amazonaws.com/dev/getfba`, requestOptions);
    const datos = await resp.json();
    const fba = datos[0].data;


    return fba;

}
