export const GetSkuHts = async ({ event }) => {

    console.log("picoooooo67678787989", event)

    var requestOptions = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            { "text": event }
        )
    };

    // const url = "https://j6zrjwrhe0.execute-api.us-west-2.amazonaws.com/prod/htsgov";
    const resp = await fetch(`https://oyq0mrdzsf.execute-api.us-east-1.amazonaws.com/dev/gethts`, requestOptions);
    const data = await resp.json();
    // const dato = data.body;
    // console.log("DATO:");
    // console.log(dato);
    /*  const hts = data.map(img => {
  
          return {
  
              "hts8": img?.hts8 ?? '',
              "brief_description": img?.brief_description ?? '',
              "quantity_1_code": img?.quantity_1_code ?? '',
              "quantity_2_code": img?.quantity_2_code ?? '',
              "mfn_text_rate": img?.mfn_text_rate ?? '',
              "mfn_ad_val_rate": img?.mfn_ad_val_rate ?? '',
              "mfn_specific_rate": img?.mfn_specific_rate ?? '',
              "mfn_other_rate": img?.mfn_other_rate ?? '',
              "col1_special_text": img?.col1_special_text ?? '',
          }
  
      }); */

    console.log("MONGO: ", data)
    return data;

}








gsp_indicator
:
"A+"
gsp_ctry_excluded
:
""
apta_indicator
:
""
civil_air_indicator
:
""
nafta_canada_ind
:
"CA"
nafta_mexico_ind
:
""
mexico_rate_type_code
:
""
mexico_ad_val_rate
:
""
mexico_specific_rate
:
""
cbi_indicator
:
"E"
cbi_ad_val_rate
:
"0"
cbi_specific_rate
:
"0"
agoa_indicator
:
"D"
cbtpa_indicator
:
""
cbtpa_rate_type_code
:
""
cbtpa_ad_val_rate
:
""
cbtpa_specific_rate
:
""
israel_fta_indicator
:
"IL"
atpa_indicator
:
""
atpa_ad_val_rate
:
""
atpa_specific_rate
:
""
atpdea_indicator
:
""
jordan_indicator
:
"JO"
jordan_rate_type_code
:
"0"
jordan_ad_val_rate
:
"0"
jordan_specific_rate
:
"0"
jordan_other_rate
:
"0"
singapore_indicator
:
"SG"
singapore_rate_type_code
:
"0"
singapore_ad_val_rate
:
"0"
singapore_specific_rate
:
"0"
singapore_other_rate
:
"0"
chile_indicator
:
"CL"
chile_rate_type_code
:
"0"
chile_ad_val_rate
:
"0"
chile_specific_rate
:
"0"
chile_other_rate
:
"0"
morocco_indicator
:
"MA"
morocco_rate_type_code
:
"0"
morocco_ad_val_rate
:
"0"
morocco_specific_rate
:
"0"
morocco_other_rate
:
"0"
australia_indicator
:
"AU"
australia_rate_type_code
:
"0"
australia_ad_val_rate
:
"0"
australia_specific_rate
:
"0"
australia_other_rate
:
"0"
bahrain_indicator
:
"BH"
bahrain_rate_type_code
:
"0"
bahrain_ad_val_rate
:
"0"
bahrain_specific_rate
:
"0"
bahrain_other_rate
:
"0"
dr_cafta_indicator
:
"P"
dr_cafta_rate_type_code
:
"0"
dr_cafta_ad_val_rate
:
"0"
dr_cafta_specific_rate
:
"0"
dr_cafta_other_rate
:
"0"
dr_cafta_plus_indicator
:
""
dr_cafta_plus_rate_type_code
:
""
dr_cafta_plus_ad_val_rate
:
""
dr_cafta_plus_specific_rate
:
""
dr_cafta_plus_other_rate
:
""
oman_indicator
:
"OM"
oman_rate_type_code
:
"0"
oman_ad_val_rate
:
"0"
oman_specific_rate
:
"0"
oman_other_rate
:
"0"
peru_indicator
:
"PE"
peru_rate_type_code
:
"0"
peru_ad_val_rate
:
"0"
peru_specific_rate
:
"0"
peru_other_rate
:
"0"
pharmaceutical_ind
:
""
dyes_indicator
:
""
col2_text_rate
:
"20%"
col2_rate_type_code
:
"7"
col2_ad_val_rate
:
"0,2"
col2_specific_rate
:
"0"
col2_other_rate
:
"0"
begin_effect_date
:
"01-07-20"
end_effective_date
:
"31-12-50"
footnote_comment
:
""