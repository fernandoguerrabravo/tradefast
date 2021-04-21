

  export  const getGifs = async (category) => {

            var myHeaders = new Headers();
            myHeaders.append("x-rapidapi-host", "amazon-product-reviews-keywords.p.rapidapi.com");
            myHeaders.append("x-rapidapi-key", "d8b96c6b55mshf883ce53b80b403p113b42jsne6116c86b747");
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
                    score: img?.score

                }

            })

          return gifs;

      
    }