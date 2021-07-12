import react from 'react';
import MaterialTable from 'material-table';
import { useGetResearch } from '../hooks/useGetResearch';
import Button from '@material-ui/core/Button';
//import reporte from './pdfreport';

export default function ListResearchTable() {

    const idcliente = "abcde"
    const { data, loading } = useGetResearch(idcliente)


    const columnas = [

        {
            title: 'SKU Code',
            field: 'sku'
        },
        {
            title: 'Keyword',
            field: 'keyword'
        },
        {
            title: 'Min Price',
            field: 'min'
        },
        {
            title: 'Average Price',
            field: 'average'
        },
        {
            title: 'Max Price',
            field: 'max'
        },

        {
            title: 'Actions',
            field: 'keyword',
            render: rowData => <Button variant="contained" color="secondary">Generate Report</Button>
        }




    ];

    const dato = [];

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