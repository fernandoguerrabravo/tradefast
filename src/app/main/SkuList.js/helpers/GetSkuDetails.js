export const GetSkuDetails = async (skunumber) => {


    var requestOptions = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skunumber: skunumber })

    };

    const resp = await fetch(`https://vwat0hqjt0.execute-api.us-east-1.amazonaws.com/dev/getskudetails`, requestOptions);
    const sku = await resp.json();

    console.log("Mongo SKUDETAILS,", sku)
    return sku[0];

}