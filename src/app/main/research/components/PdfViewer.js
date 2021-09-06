import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import CircularProgress from '@material-ui/core/CircularProgress';
import PdfReport from './PdfReport';
import UseGetPdf from '../hooks/UseGetPdf';

const PdfViewer = ({ pdf }) => {
	const { data, load } = UseGetPdf(pdf.sku);
	console.log('quye pasa con el pdf:', data);
	return (
		<>
			{load ? (
				<CircularProgress color="primary" size={60} />
			) : (
				<PDFViewer width="1200" height="600">
					<PdfReport contenido={data} pdf={pdf} />
				</PDFViewer>
			)}
		</>
	);
};

export default PdfViewer;
