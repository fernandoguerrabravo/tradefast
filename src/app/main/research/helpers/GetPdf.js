

export const GetPdf= async (sku) => {

    const idcliente = "abcdef";
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");

    const raw = JSON.stringify({

        "id_cliente": idcliente,
        "sku": sku
    });

    var requestOptions = {


        method: 'POST',
        headers: myHeaders,
        body: raw,


    };

    const url = "https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/pdfrsearch";
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
    //const detalle = data.products
    //const gifs = detalle.map(img => {

    /*   return {

           id: img?.asin ?? '',
           title: img?.title ?? '',
           link: img?.url ?? '',
           price: img?.price?.current_price ?? '',
           reviews: img?.reviews?.rating ?? '',
           total_reviews: img?.reviews?.total_review ?? '',
           url: img?.thumbnail ?? ''

       }

   }) */

    

    return data;

}




