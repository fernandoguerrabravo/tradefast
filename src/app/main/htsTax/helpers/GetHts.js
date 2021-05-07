
export const GetHts = async (htsnumber) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "mptsWu8akmKnCTK4JZ1olXe2Eni48my1N8zecIXX4p5p9daStVFfjcXF1NtF2K0i2iPSdBRfso0D59WK5sgrbOJUsu9Ckr59koQUDbuKKTFZC6FgZxtGmKy7vtaUVTj6");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

    const url = 'https://eclapi.com/trade-fast/tools/hts/010619.91';
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
    const dato = data.value;
    console.log(dato)

    /*fetch("https://hts.usitc.gov/api/search?query=copper", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */

     const hts = dato.map(img => {

        return {

            "other": img?.other ?? '',
            "superior": img?.superior ?? '',
            "indent": img?.ident ?? '',
            "description": img?.description ?? '',
            "statisticalSuffix": img?.statisticalSuffix ?? '',
            "score": img?.score ?? '',
            "special": img?.special ?? '',
            "htsno": img?.htsno ?? '',
            "general": img?.general ?? '',

        }

    }); 
    
    //console.log(hts);
    return hts;



}



