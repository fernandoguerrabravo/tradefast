import React from 'react'
import { PDFViewer } from "@react-pdf/renderer";
import PdfReport from './PdfReport';


const PdfViewer = () => {

    return (

        <PDFViewer width='1200' height='600'>

            <PdfReport />

        </PDFViewer>
    );
}

export default PdfViewer
