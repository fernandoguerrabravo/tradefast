import React, { useState } from 'react';
import axios from 'axios';

export const GetResearch = async (idcliente) => {

    try {
        const response = (
          await axios
            .post(
              "https://kne6zd76af.execute-api.us-east-1.amazonaws.com/dev/getrsearch",
              {
                id_cliente: "abcdef"
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "*/*"
                }
              }
            )
            .catch((reason) => console.warn("Axios error:", reason))
        ).data;
        console.log("API response:", response);
      } catch (reason) {
        console.warn("API request error:", reason);
      }

    return '';

}



