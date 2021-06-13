

export const SaveClasHts = async (event1, event2, event3) => {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const fecha = new Date();
    const fecha1 = fecha.toDateString()
    var raw = JSON.stringify(

        {
            "id_cliente": "abcdef",
            "htsdetails": event1,
            "fecha": fecha1,
            "sku": event2,
            "shortdescription": event3
        }

    );

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    fetch("https://oyq0mrdzsf.execute-api.us-east-1.amazonaws.com/dev/saveclashts", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return '';

}