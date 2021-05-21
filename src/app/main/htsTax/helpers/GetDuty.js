export const GetDuty = async (htsnumber, origincountry, destinationcountry) => {

    console.log(htsnumber);

    var requestOptions = {

       
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
           
            "HSCode": htsnumber,
             "OriginCountryCode": origincountry,
            "DestinationCountryCode": destinationcountry
        })
    };

    const resp = await fetch(`https://dx5kwxo8qa.execute-api.us-west-2.amazonaws.com/dev/getduty`, requestOptions);
    const data = await resp.json();
    const dato = data.body;
    //console.log("DATO:");
    //console.log(dato);
    return dato;
}