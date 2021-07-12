

export const PostResearch = async (data, category) => {


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const keyword = category;
    const fecha = new Date();
    const fecha1 = fecha.toDateString()
    var raw = JSON.stringify(
        {
            "id_cliente": "abcde",
            "keyword": keyword,
            "resultado": data,
            "fecha": fecha1
        }

    );

    //console.log("pico del pico")
    //console.log(raw);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        mode: "no-cors"
    };

    fetch("https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/listresearch", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return '';

}