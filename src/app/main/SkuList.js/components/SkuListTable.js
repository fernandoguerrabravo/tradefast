import react from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import { useGetSku } from '../hooks/useGetSku';


export default function SkuListTable() {

    const idcliente = "abcdef"
    // const { data, loading } = useGetResearch(idcliente)

    const { data } = useGetSku(idcliente)

    console.log("datos para tabla:", data);

    const columnas = [

        {
            title: 'SKU',
            field: 'sku'
        },
        {
            title: 'Short Description',
            field: 'shortdescription'
        },
        {
            title: 'Country Origin',
            field: 'country'

        },


        {
            title: 'Date Creation',
            field: 'fecha'
        },




    ];

    //const dato = [];

    return (


        <>

            <MaterialTable

                title=""
                columns={columnas}
                data={data}
            >

            </MaterialTable>

        </>




    );


}