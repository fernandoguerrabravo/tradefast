

export const getGifs = async (category) => {

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "amazon-product-reviews-keywords.p.rapidapi.com");
    myHeaders.append("x-rapidapi-key", "cbb302deccmsh69f9792bef12280p17c8a1jsn5d4e9d17ba41");
    myHeaders.append("useQueryString", true);

    var requestOptions = {

        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const url = `https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=${category}&country=US&category=aps`;
    const resp = await fetch(url, requestOptions);
    const data = await resp.json();
    console.log(data.products);


    const gifs = data.products.map(img => {

        return {

            id: img?.asin,
            title: img?.title,
            url: img?.thumbnail,
            price: img?.price?.current_price,
            reviews: img?.reviews.rating,
            total_reviews: img?.reviews.total_reviews,
            link : img?.url,
            

        }

    })




    return gifs;


}