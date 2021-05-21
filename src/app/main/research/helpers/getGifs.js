import { PostResearch } from "./PostResearch";


export const getGifs = async (category) => {

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "amazon-data.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "639c8104e9msh4d6ed94de6b4760p1d0279jsnbff33f29daba");
    myHeaders.append("useQueryString", true);

    var requestOptions = {

        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const url = `https://amazon-data.p.rapidapi.com/search.php?keyword=${category}&country=US&page=1`;
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
    
    await PostResearch(data, category)
    

    const gifs = data.map(img => {

        return {

            id: img?.asin,
            title: img?.asin_name,
            url: img?.image_url,
            price: img?.asin_price,
            reviews: img?.rating,
            total_reviews: img?.total_review,
            link : img?.url,
            

        }

    })

    return gifs;


}