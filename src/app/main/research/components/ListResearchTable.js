import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useGetResearch } from '../hooks/useGetResearch';
import Button from '@material-ui/core/Button';
import { ResearchReport } from './ResearchReport';
import Center from 'react-center';
import PdfViewer from './PdfViewer';


export default function ListResearchTable({ pdf, setpdf, setboton }) {

    const idcliente = "abcdef"
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
            render: rowData => <ResearchReport setboton={setboton} setpdf={setpdf} sku={rowData.sku} report={rowData.report} min={rowData.min} average={rowData.average} max={rowData.max} />
        }



    ];



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

                    <PdfViewer pdf={pdf} />

                </Center>
            }

        </>




    );


}