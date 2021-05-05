
export const GetHts = async (htsnumber) => {
  
    var requestOptions = {

        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
    };

    const url = `https://hts.usitc.gov/api/search?query=copper`;
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
    console.log(data.results)
  
    const hts = data.results.map(img => {

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
        
    return hts;

}



