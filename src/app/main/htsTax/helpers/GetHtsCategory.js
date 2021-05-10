export const HtsGetCategories = async (htsnumber) => {

    console.log(htsnumber);

    var requestOptions = {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "categoria": htsnumber })
    };

    //const url = "https://j6zrjwrhe0.execute-api.us-west-2.amazonaws.com/prod/htsgov";
    const resp = await fetch(`https://dx5kwxo8qa.execute-api.us-west-2.amazonaws.com/dev/getcategory`, requestOptions);
    const data = await resp.json();
    const dato = data.body;
    //console.log("DATO:");
    //console.log(dato);


    return dato;

}