import react, { useState } from 'react';
import MaterialTable from 'material-table';
import { useGetResearch } from '../hooks/useGetResearch';
import Button from '@material-ui/core/Button';
import { ResearchReport } from './ResearchReport';
import { PDFViewer } from '@react-pdf/renderer';
import SampleDocument from './PdfReport';
import Center from 'react-center';

export default function ListResearchTable() {

    const idcliente = "abcdef"
    const { data, loading } = useGetResearch(idcliente)

    const [pdf, setpdf] = useState({

        loading: true,
        sku: ''

    });

    const columnas = [

        {
            title: 'report',
            field: 'report'
        },
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
            field: 'min',
            render: rowData => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(rowData.min)
        },
        {
            title: 'Average Price',
            field: 'average',
            render: rowData => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(rowData.average)
        },
        {
            title: 'Max Price',
            field: 'max',
            render: rowData => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(rowData.max)
        },

        {
            title: 'Actions',
            field: '',
            render: rowData => <ResearchReport setpdf = {setpdf} sku={rowData.sku} report = {rowData.report} />
        }



    ];

    const dato = [];

    return (


        <>

            {pdf.loading ?

                <MaterialTable
                    title=""
                    columns={columnas}
                    data={data}
                >
                </MaterialTable>

                :
                <Center>
                <PDFViewer width='1200' height='600'>

                    <SampleDocument />

                </PDFViewer>
                </Center>
            }

        </>




    );


}