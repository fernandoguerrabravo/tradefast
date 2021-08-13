import React from 'react';
import axios from 'axios';


export const GetOtherTax = async () => {

    try {

        const response = (

            await axios

                .post(

                    "https://fl8vvup0y0.execute-api.us-east-1.amazonaws.com/dev/getothertax",
                  
                    {
                        headers: {

                            "Content-Type": "application/json",

                        }
                    }
                )
                .catch((reason) => console.warn("Axios error:", reason))
        ).data;

        

        return response[0];

    } catch (reason) {

        console.warn("API request error:", reason);

    }


}

