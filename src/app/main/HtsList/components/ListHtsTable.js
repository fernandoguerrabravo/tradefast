import react from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import { useGetClasHts } from '../hooks/UseGetClasHts';


export default function ListHtsTable() {

    const idcliente = "abcdef"
    // const { data, loading } = useGetResearch(idcliente)

    const { data } = useGetClasHts(idcliente)

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
            title: 'Category Description',
            field: 'htsdetails.categories.L0',
            render: rowData =>
                <>
                    {rowData.htsdetails.categories.L0}; {rowData.htsdetails.categories.L1} ;
                    {rowData.htsdetails.categories.L2}; {rowData.htsdetails.categories.L3} ;

                </>
        },
        {
            title: 'US Classification',
            field: 'htsdetails.hts',

        },

        {
            title: 'General Duties',
            field: 'htsdetails.duties'
        },
        {
            title: 'FTA',
            field: 'htsdetails.special'
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